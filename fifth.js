var express=require("express");
var app=express();
app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="get">
    Username: <input type="text" name="un"/>
     Password: <input type="password" name="un" />
     <button type="submit"> Submit </button>
    </form>`)
})
app.get("/data",(req,res)=>{
    const b=req.query;
    console.log(b);
    const n=req.query.un;
    res.send(`<h3> Welcome ${n} </h3>`);
})
app.listen(8008)