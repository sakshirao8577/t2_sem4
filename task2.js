var express=require("express");
var app=express();
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send(`<form action="/data" method="post">
    <input name="un">
    <input type="password" name="pass">
    <button type="submit"> Submit </button>
    </form>`);
})
var auth=(req,res,next)=>{
    if((req.body.un==="admin")&&(req.body.pass==="1234")){
        next();
    }
    else{res.send("Invalid");}
}
app.post("/data",auth,(req,res)=>{
    res.send("Welcome");
})
app.listen(7009);