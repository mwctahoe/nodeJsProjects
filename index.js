var server = require("./server");
var router = require("./router");
var mysql = require("./mysql");

server.start(router.route, mysql);