const bodyParser = require("body-parser");
const express = require("express");
const path = require ('path');
const nodemailer = require("nodemailer");
//init app
app = express();
// setting the view using the jade template engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine",'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public/stylesheets')));
app.get('/' ,function(req,res){
    res.render('index');
});
app.get('/about' ,function(req,res){
    res.render('about');
});
app.get('/contact' ,function(req,res){
    res.render('contact');
});
app.post('/contact/send' ,function(req,res){
console.log("testing our Sender")
});


app.listen(3000);
console.log("its working Lori Iro");