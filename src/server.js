var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
const fs = require('fs');


//app.use(express.static('src/public', { etag: false }));
app.use('/dist', express.static('dist', {
    etag: false
}));

app.ws('/', function (ws, req) {
    let ids = {};

    ws.on('message', function (msg) {
        console.log('incoming ' + msg);
        if (/^\d{19}$/gm.test(msg)) { // is it tweet id?
            ids[msg] = parseInt(msg[18]);
        }
    });
    console.log('socket connected');

    let t = setInterval(() => {
        let msg = {};

        Object.keys(ids).forEach(key => {
            msg[key] = {
                like_num: ids[key]
            }

            ids[key]++;
        });

        ws.send(JSON.stringify(msg));
    }, 3000);

    ws.on('close', function() {
        clearInterval(t);
    })
});

app.get('/index.json', function (req, res) {
    const distPath = './dist/';
    const indexPath = './src/public/index.json';
    const scriptsPath = 'scripts';

    fs.readFile(indexPath, (err, data) => {
        let config = JSON.parse(data);
        config[scriptsPath] = {};

        const names = fs.readdirSync(distPath);
        for (const name of names) {
            config[scriptsPath][name] = {};
            const files = fs.readdirSync(distPath + name + '/');
            for (const file of files) {
                const version = file.substr(0, file.indexOf('.js'));
                config[scriptsPath][name][version] = `dist/${name}/${file}`;
            }
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(config, null, 3));
    });
});


app.listen(8080);