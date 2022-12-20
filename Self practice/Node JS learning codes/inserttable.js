var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "Sample"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 21 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

// Escaping Query Values
// When query values are variables provided by the user, you should escape the values.

// This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.

// The MySQL module has methods to escape query values: