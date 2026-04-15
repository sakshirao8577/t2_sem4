var express=require("express");
var app=express();
// app.get("/product/:pid/cat/:c",(req,res)=>{
//     res.send(req.params);
// })
app.get("/product/:pid/cat/:c",(req,res)=>{
        //  res.send(req.query);
    // res.send(req.query.age)
    res.send(req.query.gender)
})

app.listen(5005);
// URL:http://localhost:5005/product/101/cat/kids?age=5&gender=girl