var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/index', function (req, res){
    res.send("Yeah, there's nothing here yet lmao");
})

app.listen(3000, function(){
    console.log("Example app listening on port 3000!");
});