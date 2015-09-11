var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//app.get('/', function (req,res) {
//    res.send('Hello World');
//});
console.log(__dirname);

app.listen(3000, function(){
    console.log('Server On!');
});