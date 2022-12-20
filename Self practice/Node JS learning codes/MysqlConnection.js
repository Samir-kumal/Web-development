var mysql = require("mysql");
const { createConnection } = require("net");

var con = mysql.createConnection({
    host: "localhost",
    user: "adminusr",
    password: "password",
    database: "Sample"

});
con.connect(function(err){
    if (err) throw err;
    console.log("connected!");

});