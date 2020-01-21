var express = require('express');
var app = express();
const fs = require('fs');
const https = require('https');
var bodyParser = require('body-parser');
const EventEmitter = require('events');

const IS_HTTPS = process.env.HOSTING !== "gcloud";

const store = JSON.parse(fs.readFileSync('src/server/store.json'));

class Emitter extends EventEmitter {}

const emmiter = new Emitter();

var server = null;

if (IS_HTTPS) {
    server = https.createServer({
        key: fs.readFileSync('src/server/secret/server.key'),
        cert: fs.readFileSync('src/server/secret/server.cert')
    }, app);

    var expressWs = require('express-ws')(app, server);
} else {
    var expressWs = require('express-ws')(app);
}

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/packages', express.static('packages', {
    etag: false
}));

app.use('/', express.static('src/client', {
    etag: false
}));

app.ws('/', function (ws, req) {
    const callbackMap = new Map();
    let subscriptionCount = 0;

    ws.on('message', json => {

        let rpc = null;

        try {
            rpc = JSON.parse(json);
        } catch (err) {
            ws.send(JSON.stringify({
                jsonrpc: "2.0",
                error: {
                    code: -32700,
                    message: "Parse error"
                },
                id: null
            }));
            return;
        }

        const {
            id,
            method,
            params
        } = rpc;

        if (id === undefined || !method || !params || !(typeof params === 'object' || Array.isArray(params))) {
            ws.send(JSON.stringify({
                jsonrpc: "2.0",
                error: {
                    code: -32600,
                    message: "Invalid JSON-RPC."
                },
                id: null
            }));
            return;
        }

        if (method === "subscribe") {
            const [subscriptionName, ...args] = params;

            if (subscriptionName === "tweetInfo") {
                const [ctx] = args;

                if (!ctx || !ctx.id || !(/^\d{19}$/gm.test(ctx.id))) {
                    ws.send(JSON.stringify({
                        jsonrpc: "2.0",
                        id: id,
                        error: {
                            code: null,
                            message: "ctx.id is required."
                        }
                    }));
                    return;
                }

                const tweetId = ctx.id;

                const subscriptionId = (++subscriptionCount).toString();

                ws.send(JSON.stringify({
                    jsonrpc: "2.0",
                    id: id,
                    result: subscriptionId
                }));

                ws.send(JSON.stringify({
                    jsonrpc: "2.0",
                    method: "subscription",
                    params: {
                        subscription: subscriptionId,
                        result: {
                            like_num: store.tweets[tweetId] ? store.tweets[tweetId].length : 0
                        }
                    }
                }));

                const callback = ({ tweet, market }) => {
                    if (tweet !== tweetId) return;

                    ws.send(JSON.stringify({
                        jsonrpc: "2.0",
                        method: "subscription",
                        params: {
                            subscription: subscriptionId,
                            result: {
                                like_num: store.tweets[tweetId] ? store.tweets[tweetId].length : 0
                            }
                        }
                    }));
                }

                emmiter.on('tweetAttached', callback);
                callbackMap.set(subscriptionId, callback);

            } else {
                ws.send(JSON.stringify({
                    jsonrpc: "2.0",
                    id: id,
                    error: {
                        code: null,
                        message: "Invalid subscription name."
                    }
                }))
            }
        } else if (method === "unsubscribe") {
            const [subscriptionId] = params;

            const callback = callbackMap.get(subscriptionId);
            emmiter.off('tweetAttached', callback);

            ws.send(JSON.stringify({
                jsonrpc: "2.0",
                id: id,
                result: true
            }))
        } else {
            ws.send(JSON.stringify({
                jsonrpc: "2.0",
                id: id,
                error: {
                    code: -32601,
                    message: "Procedure not found."
                }
            }))
        }
    });

    ws.on('close', () => {
        emmiter.removeAllListeners('tweetAttached');
    })
});

app.get('/index.json', function (req, res) {
    const packagesPath = './packages';
    const indexPath = './src/server/config.json';
    const scriptsPath = 'modules';

    fs.readFile(indexPath, (err, data) => {
        let config = JSON.parse(data);
        config[scriptsPath] = {};

        const packages = fs.readdirSync(packagesPath);
        for (const package of packages) {
            const manifest = fs.readFileSync(packagesPath + '/' + package + '/manifest.json', 'utf8');
            let {
                name,
                branch,
                version
            } = JSON.parse(manifest);
            if (!branch) branch = "default";
            if (!config[scriptsPath][name]) config[scriptsPath][name] = {};
            if (!config[scriptsPath][name][branch]) config[scriptsPath][name][branch] = {};

            if (fs.existsSync(packagesPath + '/' + package + '/archive')) {
                const versions = fs.readdirSync(packagesPath + '/' + package + '/archive');
                for (const version of versions) {
                    config[scriptsPath][name][branch][version] = `packages/${package}/archive/${version}/manifest.json`;
                }
            }

            config[scriptsPath][name][branch][version] = `packages/${package}/build/manifest.json`;
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(config, null, 3));
    });
});

app.get('/api/markets', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(store, null, 3));
});

app.post('/api/markets/attach', function (req, res) {
    const {
        tweet,
        market
    } = req.body;

    if (store.tweets[tweet] && store.tweets[tweet].length) {
        store.tweets[tweet].push(market);
    } else {
        store.tweets[tweet] = [market];
    }

    res.status(200).end();
    emmiter.emit('tweetAttached', {
        tweet,
        market
    });
});

if (server) {
    server.listen(8080);
} else {
    app.listen(8080);
}