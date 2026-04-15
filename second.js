var express=require("express");
var app=express();
obj=[{"name":"x","age":30},{"name":"y","age":15},{"name":"z","age":45}]
app.get("/api",(req,res)=>{
    res.write(obj[1].age+" "+"\n");
    res.write(obj[1].name);
    res.send();
    // res.send(obj);
})
app.get("/api1",(req,res)=>{
    res.json(obj);
})
app.get("/api2",(req,res)=>{
    // res.write(obj); it will throw error
    res.write(JSON.stringify(obj));
    res.send()
})
app.get("/sort",(req,res)=>{
    var d=obj.sort((a,b)=>b.age-a.age);
    res.type("text/html");
    res.write(`<table border="1">
    <tr><th>Name</th>
    <th>Age</th>
    </tr>`)
    for(i of d){
        res.write(`<tr><td> ${i.name} </td>
         <td> ${i.age} </td> </tr>`)
    }
    res.write(`</table>`)
    res.send();
})
app.listen(7002);