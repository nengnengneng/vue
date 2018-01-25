var http = require('http');
var querystring = require('querystring');

module.exports = function(path, params, methods){
    return new Promise(function(resolve, reject) {
        const postData = querystring.stringify(params);
        const options = {
            protocol: 'http:',
            hostname: 'www.lb717.com',
            port: 80,
            path: path,
            method: methods || 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        let req = http.request(options, (res) => {
            res.setEncoding('utf8');
            var data = "";
            res.on('data', (chunk) => {
                data+=chunk;
            });
            res.on('end', () => {
                resolve(data);
            });
        });
        req.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);
        })
        req.write(postData);
        req.end();
    })
}