var session = require("express-session");
var express = require("express");
var cp = require("cookie-parser");
var app = express();
app.use(session({
    secret: "LJ123"
}));
app.use(cp());
app.use(express.urlencoded());
app.use(express.static(__dirname, { index: "h2.html" }))
app.post("/save", (req, res) => {
    req.session.un = req.body.un;
    req.session.pass = req.body.pass;
    res.redirect("fetchdata");
});
app.get("/fetchdata", (req, res) => {
    if(req.session.un=="admin" && req.session.pass=="admin@123"){
    res.send(`Welcome Admin! <a href="/fetchdata"> Logout </a>`);
    }
});
app.get("/deletesession", (req, res) => {
    // req.session.destroy();
    req.session.destroy((e) => {
        if (e) { res.send(e) }
        else {
            res.clearCookie("connect.sid");
            res.send(`Destroyed ${req.session.un}`);
        }
    })
    res.redirect("/");
});
app.listen(8001);