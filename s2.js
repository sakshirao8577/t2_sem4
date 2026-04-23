var s=require("express-session");
var express=require("express");
var cp = require("cookie-parser");
var app=express();
app.use(s({secret:"123"}));
app.use(cp());
app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "s2.html" }));
app.post("/savesession",(req,res)=>{
    req.session.un=req.body.un;
    req.session.pass=req.body.pass;
    res.redirect("fetchsession");
})
app.get("/fetchsession",(req,res)=>{
    res.send(`Welcome ${req.session.un}!<a href="/deletesession">Logout</a>`)
});
app.get("/deletesession",(req,res)=>{
    req.session.destroy();
    res.redirect("/");
})
app.listen(8001);