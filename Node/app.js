const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var encoded = bodyParser.urlencoded();
app.use('/assets',express.static('assets'))
app.set('view engine','ejs');
app.get("/profile/:name",function(req,res){
    data={email:'XXXXXX@gmail.com',address:'delhi',skills:['node js']}
    res.render('Profile',{name:req.params.name,data:data})
})
app.get('/',function (req,res) {
    res.render('Home');
});
app.post('/Login',encoded,function (req,res) {
    console.warn(req.body);
    res.render('Home');
});
app.get('/Login',function (req,res) {
    // console.log(req.query);
    res.render('Login');
});
app.listen(4500); 