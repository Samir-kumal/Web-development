const express = require("express");

const app = express();

//MIDDLEWARES
//app.use(auth);


//ROUTES
app.get("/", (req,res)=>{
    res.send("hello world!");
});

app.listen(3000);