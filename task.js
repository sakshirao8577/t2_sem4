var express=require("express");
var app=express();
app.get("/user/:uid",(req,res)=>{
       res.type("text/html");
       res.write(`<h3> Welcome: ${req.query.name} </h3>
       <h3> Your user id: ${parseInt(req.params.uid)}`)
       if(parseInt(req.query.age)<18){
        res.write(`<h4> you are minor </h4>`)
       }
       else{
        res.write(`<h4> you are adult </h4>`)
       }
       res.send();
     });
app.listen(7001);
