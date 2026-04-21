var express=require("express");
var app=express();
var cp = require("cookie-parser");
app.use(cp());
app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "c1.html" }))
app.post("/next", (req, res) => {
    res.cookie("fname", req.body.fn);
    res.cookie("lname", req.body.ln);
    res.cookie("password", req.body.pass);
    res.redirect("/admin");
})
app.get("/admin", (req, res) => {
    res.clearCookie("lname");
    res.send(`<h1> Welcome ${req.cookies.fname} ${req.cookies.lname} </h1>
        <h3> Your Password ${req.cookies.password}</h3>`);
})
app.listen(7007);