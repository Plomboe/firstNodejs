var mysql = require('mysql');

//Get a connection to mysql db
var con = mysql.createConnection({
    host: "localhost",
    user: "tareq",
    password: "password",
    database: "database"
});

con.connect(function (err) {
    console.log("Connected!");
    // con.query("show databases", (err, result, fields) => {
    //     console.log(result);
    // });
    // con.query("CREATE DATABASE mydb", (err, result) => {
    //     if(result){
    //         console.log("Database created");
    //     }
    // });
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, (err, result) => {
        if (err){
            console.log("The error is: " + err);
        }
        if (result){
            console.log("Table created!");
        }
    });
    // con.query("show databases", (err, result, fields) => {
    //     console.log(result);
    // });
});

