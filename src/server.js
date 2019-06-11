var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(express.static('src/public', { etag: false }));
app.use('/dist', express.static('dist', { etag: false }));

app.ws('/', function (ws, req) {
    
    ws.on('message', function (msg) {
        console.log('recieved: ' + msg);
        const response = msg.length;
        ws.send(response);
        console.log('sent: ' + response);
    });
    console.log('socket connected');

});


app.listen(8080);