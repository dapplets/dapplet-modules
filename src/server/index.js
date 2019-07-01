var express = require('express');
var app = express();
const fs = require('fs');
const https = require('https');
var bodyParser = require('body-parser');

const store = JSON.parse(fs.readFileSync('src/server/store.json'));

const server = https.createServer({
    key: fs.readFileSync('src/server/secret/server.key'),
    cert: fs.readFileSync('src/server/secret/server.cert')
}, app);

var expressWs = require('express-ws')(app, server);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//app.use(express.static('src/public', { etag: false }));
app.use('/dist', express.static('dist', {
    etag: false
}));

app.use('/', express.static('src/client', {
    etag: false
}));

app.ws('/', function (ws, req) {
    let msg = {
        "0": { like_num: 0 }
    };

    ws.on('message', function (tweetId) {
        if (/^\d{19}$/gm.test(tweetId)) { // is it tweet id?
            msg[tweetId] = { like_num: store.tweets[tweetId] ? store.tweets[tweetId].length : 0 };
        }
        ws.send(JSON.stringify(msg));
    });
});

app.get('/index.json', function (req, res) {
    const distPath = './dist/';
    const indexPath = './src/server/config.json';
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
});

server.listen(8080);