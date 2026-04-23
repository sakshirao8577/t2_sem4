var s=require("express-session");
var express=require("express");
var cp = require("cookie-parser");
var app=express();
app.use(s({secret:"123"}));
app.use(cp());
app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "s3.html" }));
app.post("/save",(req,res)=>{
    req.session.un=req.body.un;
    req.session.pass=req.body.pass;
    res.redirect("fetchdata");
})
app.get("/fetchdata",(req,res)=>{
    if(req.session.un=="admin" && req.session.pass=="admin@123"){
    res.send(`Welcome ${req.session.un}!<a href="/deletesession">Logout</a>`)
    }
    else{
        res.send(`Please enter valid username or password!<a href="/">Login</a>`)
    }
});
app.get("/deletesession",(req,res)=>{
    req.session.destroy();
    res.send(`Session Destroyed!<a href="/">Login</a>`)
})
app.listen(7009);