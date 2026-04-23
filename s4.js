var s=require("express-session");
var express=require("express");
var cp = require("cookie-parser");
var app=express();
app.use(s({secret:"123"}));
app.use(cp());
app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "s4.html" }));
var mw1=(req,res,next)=>{
    res.type("text/html");
    res.write(`<h2>Welcome ${req.body.un}!</h2><br><h3>Email is ${req.body.email}</h3>`);
    next();
}
app.post("/login",mw1,(req,res)=>{
    if(req.body.check==='subscribe'){
        res.write(`Thank you <a href="/">Logout</a>`)
    }
    else{
        res.write(`You can subscribe <a href="/subscribe">Subscribe</a>`);
    }
    res.send();
});
app.get("/subscribe",(req,res)=>{
    res.send(`Thank you <a href="/">Logout</a>`)
})
app.listen(7001);
