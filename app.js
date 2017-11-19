var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.get('/board/new', function(req, res){
  var str = `
    <form action="/board/create", method="post">
      제목: <input name="title"><br>
      내용: <textarea name="content"></textarea>
      <br>
      <input type="submit" value="제출">
    </form>
  `

  res.send(str);

});


app.get('/board/:type/:id', function(req, res){
    var boards = {
	"1": {
	  "title":"야 진짜 빡친다;;",
	  "content":"이거 장난하는거냐?"
	},
	"2": {
	  "title":"ㅎㅎ 행복해요",
	  "content":"지금 연애중!"
	},
	"3": {
	  "title":"아 운영자님 제발 봐주세요",
	  "content":"힝 속았찌?"
        }
    };
    var type = {free:"자유",anony:"익명",announce:"공지사항"};

    var str = `
      <h1>${type[req.params.type]} 게시판</h1>
      <h3>제목: ${boards[req.params.id]["title"]}</h3>
      <p>${boards[req.params.id]["content"]}</p>
    `;
    res.send(str);
})

app.post('/board/create', function(req, res){
  var str = `
    <h3>제목: ${req.body.title}</h3>
    <p>${req.body.content}</p>
  `
  res.send(str);
});


app.listen(3000, function(){
    console.log('Connected 3000 port!');
});
