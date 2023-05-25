const express = require('express');
const app = express();
const router = express.Router();

const Check=function(req,res,next){
    console.log("route",req.originalUrl);
    next();
}

app.get('/',function (req,res) {
    res.send('Home');
});
router.get('/L',Check,function (req,res) {
    res.send('Login');
});
router.get('/A',Check,function (req,res) {
    res.send('About');
});

app.use('/',router);
app.listen(4500); 