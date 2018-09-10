var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index', function (req, res){
    res.send("Yeah, there's nothing here yet lmao");
})

app.listen(3000, function(){
    console.log("Example app listening on port 3000!");
});

app.listen(4200, function(){
    console.log("Example app is also listening on port 4200!");
})
