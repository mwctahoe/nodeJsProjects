var http = require("http");
var url = require("url");

function start(route, mysql) {
  function onRequest(request, response) {
  	var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received");

    route(pathname);

    var result;
    if(mysql.connect("nodeTest")){
      result = mysql.query("SELECT * FROM users");
      console.log("lolol"+result);
    }

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World\n");
    response.write("response="+result);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;