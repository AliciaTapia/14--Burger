/**Inside the connection.js file, setup the code to connect Node to MySQL.

Export the connection.

**/

var key = require("../keys.js")


// Set up MySQL connection.
var mysql = require("mysql");


var connectionInfo = {
  port: 3306,
  host: "localhost",
  user: "root",
  password: key.pass.prueba_uno,
  database: "burgers_db"
};

if (process.env.JAWSDB_URL){
  connectionInfo = process.env.JAWSDB_URL;
}

var connection = mysql.createConnection(connectionInfo);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;