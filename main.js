var express = require("express");
var app = express();
app.use(express.urlencoded());
app.set("view engine",'ejs');
app.get("/",(req,res)=>{
    res.render("form");
})
app.post("/result",(req,res)=>{
    var n=req.body.sn;
    var m=req.body.marks;
    res.render("result",{n,m});
})
app.listen(8009);