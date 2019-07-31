const fs = require("fs");
const path = require("path");
const FormData = require('form-data');
const fetch = require('node-fetch');

const REGISTRY_ACCOUNT = "dapplet-base";
const REGISTRY_KEY = "";
const REGISTRY_API = "https://test.dapplets.org";

const DIST_PATH = path.join(__dirname, "../dist");

if (!REGISTRY_KEY) throw new Error("REGISTRY_KEY is required");

function str2buf(str) {
    var buf = new ArrayBuffer(str.length);
    var arr = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        arr[i] = str.charCodeAt(i);
    }
    return Buffer.from(buf);
}

async function saveToStorage(stream) {
    var form = new FormData();
    form.append('file', stream);

    const response = await fetch(`${REGISTRY_API}/api/storage`, {
        method: 'POST',
        body: form,
        headers: form.getHeaders()
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) throw new Error("Error in saveToStorage")
    return json.data;
}

async function addModuleToRegistry(uri) {
    const response = await fetch(`${REGISTRY_API}/api/registry/${REGISTRY_ACCOUNT}/add-module?uri=${uri}&key=${REGISTRY_KEY}`, {
        method: 'POST'
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) throw new Error("Error in addModuleToRegistry")
    return;
}


async function addSiteBinding(name, branch, site) {
    const response = await fetch(`${REGISTRY_API}/api/registry/${REGISTRY_ACCOUNT}/add-site-binding?name=${name}&branch=${branch}&site=${site}&key=${REGISTRY_KEY}`, {
        method: 'POST'
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) throw new Error("Error in addSiteBinding")
    return;
}

async function deploy() {
    const names = fs.readdirSync(DIST_PATH);

    for (const name of names) {
        const branches = fs.readdirSync(path.join(DIST_PATH, name));
        for (const branch of branches) {
            const versions = fs.readdirSync(path.join(DIST_PATH, name, branch));
            for (const version of versions) {
                console.log(`Deploying of module: ${name}#${branch}@${version}`);

                const manifestPath = path.join(DIST_PATH, name, branch, version, "manifest.json");
                const manifestJson = fs.readFileSync(manifestPath, "utf8");
                const manifest = JSON.parse(manifestJson);
                const dist = manifest.dist;

                const scriptPath = path.join(DIST_PATH, name, branch, version, dist);
                const scriptStream = fs.createReadStream(scriptPath);

                const scriptUri = await saveToStorage(scriptStream);

                manifest.dist = scriptUri;
                const tempManifestJson = JSON.stringify(manifest);
                const tempManifestPath = path.join(DIST_PATH, name, branch, version, "manifest.json.temp");
                fs.writeFileSync(tempManifestPath, tempManifestJson);

                const tempManifestStream = fs.createReadStream(tempManifestPath);

                const manifestUri = await saveToStorage(tempManifestStream);

                fs.unlinkSync(tempManifestPath);

                await addModuleToRegistry(manifestUri);
            }
        }
    }

    const devConfigJson = fs.readFileSync(path.join(__dirname, "../src/server/config.json"), "utf8");
    const devConfig = JSON.parse(devConfigJson);

    for (const hostname in devConfig.hostnames) {
        for (const moduleName in devConfig.hostnames[hostname]) {
            await addSiteBinding(moduleName, "default", hostname);
        }
    }

    console.log("DONE.");
}

deploy();