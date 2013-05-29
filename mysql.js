var mysql = require("mysql");
var connection = null;


function connect(dbName){
	if(connection == null){
		connection = mysql.createConnection({user:"root",password:"",database: dbName});
	}

	return (connection!=null);
}

function query(queryStr){
	return connection.query(queryStr);
}