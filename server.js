"use strict";

const facts = require("./external")
const http = require("http");
http.createServer((req, res) => {
res.writeHead(200, {"Content-type": "text/plain"});
res.write(facts[Math.floor(Math.random()*facts.length)]);
res.end();
}).listen(3000);