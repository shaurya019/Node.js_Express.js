const express = require('express');
const app = express();
const router = express.Router();

const Check=function(req,res,next){
    console.warn("route",req.originalUrl);
    next();
}

app.get('/',function (req,res) {
    res.sendFile(__dirname+"/H.html")
});
router.get('/L',Check,function (req,res) {
    res.send('Login');
});
router.get('/A',Check,function (req,res) {
    res.sendFile(__dirname+"/A.html")
});

app.use('/',router);

app.listen(4000); 