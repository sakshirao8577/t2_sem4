var express = require("express");
var app = express();
var router = express.Router();
// app.get("/student/id/:id", (req, res) => {
// })
// app.get("/student/branch/:branch", (req, res) => {
// })
// app.get("/faculty/id/:id", (req, res) => {
// })
var obj = [
  { name: "A", id: 001, age: 20, city: "Ahmedabad", branch: "CSE" },
  { name: "B", id: 002, age: 21, city: "Mehsana", branch: "CSE" },
  { name: "D", id: 005, age: 20, city: "Surat", branch: "IT" },
  { name: "A", id: 007, age: 22, city: "Ahmedabad", branch: "CE" },
  { name: "P", id: 009, age: 19, city: "Rajkot", branch: "IT" },
  { name: "B", id: 008, age: 18, city: "Ahmedabad", branch: "CST" },
];
router.get("/", (req, res) => {
  res.type("text/html");
  for (o of obj) {
    res.write(`<h1> Name: ${o.name} Id: ${o.id} Age: ${o.age} 
            Branch: ${o.branch} City: ${o.city} </h1>`);
  }
  res.send();
});
router.get("/id/:id", (req, res) => {
  var data = obj.filter((o) => o.id == req.params.id);
  if (data.length > 0) {
    res.send(data);
  } else {
    res.send("No Such student available");
  }
});
router.get("/branch/:branch", (req, res) => {
  var data = obj.filter(
    (o) => o.branch.toLowerCase() == req.params.branch.toLowerCase(),
  );
  if (data.length > 0) {
    res.send(data);
  } else {
    res.send("No Such student available");
  }
});
module.exports = router;
