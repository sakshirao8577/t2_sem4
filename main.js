var express = require("express");
var app = express();
var api = require("./student");
app.use("/students", api);
app.listen(7001);
