var session=require("express-session");
var express=require("express");
var app=express();
app.use(session({secret:"LJ123",resave:false,saveUninitialized:false,
    cookie:{maxAge: 10000}
}));
app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style=color:red>You have visited ${req.session.page_views}</h1>`)
    }
    else{
        req.session.page_views=1;
        res.send(`<h1>Welcome to my website!</h1>`)
    }
})
app.listen(7009);