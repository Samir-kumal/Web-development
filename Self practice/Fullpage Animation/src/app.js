const express = require('express');
const path = require('path');
const hbs = require('hbs')

const app = express();
const public = path.join(__dirname,'../public');
const partialPath = path.join(__dirname,'../templates/partials')
const templates = path.join(__dirname,'../templates/views')
app.use(express.static(public))

app.set('view engine','hbs');
app.set('views',templates)
hbs.registerPartials(partialPath)

app.get('/',(req,res)=>{
    res.status(200).render('index',{
        fieldname:"samir"
    })
})
app.get('/work',(req,res)=>{
    res.status(200).render('work')
})
app.get('*',(req,res)=>{
    res.status(404).render('404err',{
        errmsg:"page didnt found"
    })
})


app.listen(5000);