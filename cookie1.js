var express=require("express");
var app=express();
var cp = require("cookie-parser");
app.use(cp());

app.get("/", (req, res) => {
    res.cookie("fname", "ABC");
    res.cookie("lname", "XYZ");
    res.cookie("subject", "FSD-2", { maxAge: 5000 });
    res.cookie("email", "abc@gmailcom", { expires: new Date(Date.now() + 10000) });
    res.clearCookie("fname");
    // console.log(fname);  //ReferenceError: fname is not defined
    res.send(req.cookies);
})
app.listen(5009);