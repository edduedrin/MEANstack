var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const cors = require('cors');


// mongoose.connect('mongodb://127.0.0.1:27017/est').then((edwin)=>{
//     console.log('ok',edwin)
// }).catch((er)=>{
//     console.log(er)
// })

mongoose.connect('mongodb://127.0.0.1:27017/est',{useNewUrlParser:true, useUnifiedTopology:true},function checkDB(error){
   if(error){
    console.log(error);
   }else{
    console.log("DB connected");
   }
})


server.use(cors());

server.use(express.json());

server.use(routes);


server.listen(8000,function check(error){
    if(error){
        console.log("error");
    }else{
        console.log("server strated on 8000");
    }
});

