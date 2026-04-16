var express=require("express");
var app=express();
var first=(req,res,next)=>{
    console.log("First Middleware");
    next();
}
var second=(req,res,next)=>{
    req.name="Dhriti"
    console.log("Second Middleware")
    next();
}
var third=(req,res,next)=>{
    req.marks=25;
    console.log("Third");
    next();
}
app.use("/test",first,third)
app.get("/test",(req,res)=>{
    res.send("My Page");
})
app.get("/all",first,second,third,(req,res)=>{
    res.send(`<h1>Hello! ${req.name}</h1><h2>Your marks ${req.marks}</h2>`)
})
app.listen(5001);