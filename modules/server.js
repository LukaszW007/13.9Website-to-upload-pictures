var http = require('http');
var colors = require('colors');

var handlers = require('./handlers.js');

function start(){
    function onRequest(request, response) {
        console.log('Request received');
        console.log('Request: ' + request.url + ' received!');
        response.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
        console.log(request.toString(),response.toString());
        switch (request.url) {
            case '/':
            case '/start':
                handlers.welcome(request, response);
                console.log(request,response);
                break;
            case '/upload':
                handlers.upload(request, response);
                break;
            default:
                handlers.errors(request, response);
        }
    }
    http.createServer(onRequest).listen(9000);
    console.log("Started server!".green);
}

exports.start = start;
