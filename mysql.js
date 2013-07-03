var mysql = require("mysql");
var connection = null;
var config = require("./config");

function connect(dbName){
	if(connection == null){
		connection = mysql.createConnection({user:"root",password: config.dbPassword,database: dbName});
	}

	return (connection!=null);
}

function query(queryStr){
	connection.query(queryStr, function(err, rows, fields) {
  		if (err){ 
  			throw err;
  		} else {
	  		console.log('ROW=', rows);
	  		console.log('The rows: ', rows[0].username);
	  		console.log("the fields:", fields);
	  		return rows[0].username;
  		}
	});
}

exports.connect = connect;
exports.query = query;