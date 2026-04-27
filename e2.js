var express = require("express");
var app = express();
app.set("view engine",'ejs');
app.get("/",(req,res)=>{
    res.render("e1",{college:"LJU"});
})
app.listen(7001);