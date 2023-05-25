const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');
mongoose.connect('mongodb+srv://SPS023:9snQkst4uIFSNIhk@clustersps.binipo4.mongodb.net/tutorial?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
);


// Users.find()
// .then(function (users) {
// console.log(users);
// })
// .catch(function (err) {
// console.log(err);
// });


// const data = new User({
// _id:new mongoose.Types.ObjectId(), 
// name:"tony",
// email:"IronMan23@stark.com",
// address:"Stark tower",
// });
// data.save().then((result)=>{
//     console.warn(result);
// })
// .catch(err=>console.log(err));


// app.get('/users',function(req,res){
//     User.find().then((data)=>{
//         res.json(data)
//     })
// })


// app.get('/users',function(req,res){
//     User.find().then((data) => {
//         res.status(201).json(data)
//        })
// })


app.listen(4000);