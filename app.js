const bodyParser = require("body-parser");
const express = require("express");
const path = require ('path');
const nodemailer = require("nodemailer");
//init app
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/' ,function(req,res){
    res.send("Hello World");
})


app.listen(3000);
console.log("its working Lori Iro");