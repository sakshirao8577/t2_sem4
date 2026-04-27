var express = require("express");
var app = express();
var mult = require("multer");
app.use(express.static(__dirname, { index: "mult1.html" }));
var store = mult.diskStorage({
    destination: "my",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
        console.log(file);
    }
});
var upload = mult({ storage: store });
app.post("/uploadfile", upload.single("mydoc"), (req, res) => {
    var f = req.file;
    console.log(f);
    if (f) {
        res.send(`<h1> File ${f.originalname} has been uploaded in folder
             <span style="color:red"> ${f.destination} </span></h1>`)
    }
    else {
        res.send("No such file Uploaded!!")
    }
})
app.listen(7009);