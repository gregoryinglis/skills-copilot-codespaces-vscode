// Create web server
// 1. Load the http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var querystring = require('querystring');
var comments = [];
var server = http.createServer(function (req, res) {
    // 2. Create server
    // 3. Get request URL
    var parseObj = url.parse(req.url, true);
    var pathname = parseObj.pathname;
    // 4. Process request
});