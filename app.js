var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    var str = `
    <form action="/login" method="get">
    <input name="username">
    </form>
    `;
    res.send(str);
});
app.get('/login', function(req, res){
    
    var username = req.query.username;	
    var str = `
      <h1>Hello ${username}!</h1>
    `;
    res.send(str);
});
app.listen(3000, function(){
    console.log('Connected 3000 port!');
});
