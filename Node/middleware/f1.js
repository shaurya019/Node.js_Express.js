const express = require('express');
const app = express();

const Check=function(req,res,next){
    console.warn("route",req.originalUrl);
    next();
}

app.use(Check);
app.get('/',function (req,res) {
    res.send('Home');
});
app.get('/L',function (req,res) {
    res.send('Login');
});
app.get('/A',function (req,res) {
    res.send('About');
});

app.listen(3000); 