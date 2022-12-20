var mysql = require("mysql");
const { createConnection } = require("net");

var con = mysql.createConnection({
  host: "localhost",
  user: "adminusr",
  password: "password",
  database: "Sample",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
  var sql = "CREATE TABLE customer(name VARCHAR(30), age INT, address VARCHAR(30))"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
