var express = require('express');
var app = express();
var path = require('path');
var userCreds = require('./userCreds');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index', function (req, res){
    console.log(req);
    // res.send();
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
    app.post('/userCreds', function (){
        userCreds.setUserDetails("Tk01", "password123", "Tareq", "Karimi")
    });
})


app.get("/createUser", function (req, res){
    res.setHeader('Access-Control-Allow-Origin', 'https://www.codepunker.com');
    res.setHeader('Access-Control-Allow-Methods', '*'); // If needed
    res.setHeader('Access-Control-Allow-Headers', '*'); // If needed
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
})

app.listen(3000, function(){
    console.log("Example app listening on port 3000!");
});

