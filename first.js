var express=require("express");
var app=express();
// app.get(path,callback fun)
app.get("/",(req,res)=>{
    res.set("Content-type","text/html");
    // res.setHeader("Content-type","text/html");
    res.write("<h3>Hello B2 students!</h3>")
    res.send();
});
app.get("/about",(req,res)=>{
   res.write("<h2>Hello</h2>")
   res.send()
   //res.send("<h3>About Page</h3>") //Cannot set headers after they are sent to the client
});
app.listen(7001,()=>{console.log("Server started");})
