var http = require('http');
var colors = require('colors');

function start(){
    function onRequest(request, response) {
        console.log('Request received');
        response.writeHead(200,{"Content-type": "text/plain"});
        response.write('DONE');
        response.end();
    }
    http.createServer(onRequest).listen(9000);
    console.log("Started server!".green);
}

exports.start = start;
