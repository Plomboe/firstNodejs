var express = require('express');
var app = express();
var path = require('path');
var userCreds = require('./userCreds');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index', function (req, res){
    console.log(req);
    res.send("Yeah, there's nothing here yet lmao");
    app.post('/userCreds', function (){
        userCreds.setUserDetails("Tk01", "password123", "Tareq", "Karimi")
    });
})

app.listen(3000, function(){
    console.log("Example app listening on port 3000!");
    console.log(__dirname);
    console.log(__filename);
});

