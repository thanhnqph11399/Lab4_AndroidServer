var express =require('express');
var app=express();

var expressHbs=require('express-handlebars');

app.use('/assets',express.static(__dirname+'/assets'));
//thiết lập thư viện handlebars
app.engine('handlebars',expressHbs({
  //thiết lập thư mục và tên của file layout cha
  layoutsDir: __dirname+'/views/layouts',
  defaultLayout: 'base'
}))
app.set('view engine','handlebars')



//lawngs nghe  http get
app.get('/',function (req, res) {
  res.render('index');
});
app.get('/home',function (req, res) {
  res.render('home');
});
app.get('/account',function (req, res) {
  res.render('account');
});
app.get('/login',function (req, res) {
  res.render('login');
});
//lắng nghe http post
app.get('/', function (req, res) {

});

app.listen(process.env.PORT || '3000')

