var express = require('express');
var app = express();
const fs = require('fs');
const https = require('https');
var bodyParser = require('body-parser');

class Emitter {
    // Add an event listener for given event
    on(event, fn) {
        this._callbacks = this._callbacks || {};
        // Create namespace for this event
        if (!this._callbacks[event]) {
            this._callbacks[event] = [];
        }
        this._callbacks[event].push(fn);
        return this;
    }


    emit(event, ...args) {
        this._callbacks = this._callbacks || {};
        let callbacks = this._callbacks[event];

        if (callbacks) {
            for (let callback of callbacks) {
                callback.apply(this, args);
            }
        }

        return this;
    }

    // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.
    off(event, fn) {
        if (!this._callbacks || (arguments.length === 0)) {
            this._callbacks = {};
            return this;
        }

        // specific event
        let callbacks = this._callbacks[event];
        if (!callbacks) {
            return this;
        }

        // remove all handlers
        if (arguments.length === 1) {
            delete this._callbacks[event];
            return this;
        }

        // remove specific handler
        for (let i = 0; i < callbacks.length; i++) {
            let callback = callbacks[i];
            if (callback === fn) {
                callbacks.splice(i, 1);
                break;
            }
        }

        return this;
    }
}

const store = JSON.parse(fs.readFileSync('src/server/store.json'));

const emmiter = new Emitter();

const server = https.createServer({
    key: fs.readFileSync('src/server/secret/server.key'),
    cert: fs.readFileSync('src/server/secret/server.cert')
}, app);

var expressWs = require('express-ws')(app, server);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


//app.use(express.static('src/public', { etag: false }));
app.use('/packages', express.static('packages', {
    etag: false
}));

app.use('/', express.static('src/client', {
    etag: false
}));

app.ws('/', function (ws, req) {
    let msg = {
        "0": {
            like_num: 0
        }
    };

    ws.on('message', function (tweetId) {
        if (/^\d{19}$/gm.test(tweetId)) { // is it tweet id?
            msg[tweetId] = {
                like_num: store.tweets[tweetId] ? store.tweets[tweetId].length : 0
            };
        }
        ws.send(JSON.stringify(msg));
    });

    var callback = ({
        tweet,
        market
    }) => {
        if (msg[tweet]) {
            msg[tweet] = {
                like_num: store.tweets[tweet] ? store.tweets[tweet].length : 0
            };
            ws.send(JSON.stringify({
                [tweet]: msg[tweet]
            }));
        }
    };

    emmiter.on('tweetAttached', callback);

    ws.on('close', () => {
        emmiter.off('tweetAttached', callback);
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

server.listen(8080);