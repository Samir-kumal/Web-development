var mysql = require("mysql");
const { createConnection } = require("net");

var con = mysql.createConnection({
    host: "localhost",
    user: "adminusr",
    password: "password",

});
con.connect(function(err){
    if (err) throw err;
    console.log("connected!");
    con.query("CREATE DATABASE Sample", function(err, result){
        if (err) throw err;
        console.log("Database created");
    });
});