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
    transporter = nodemailer.createTransport({
        service : 'gmail',
        auth:{
            user :"adegbijilanre@gmail.com",

        }
    });
    const mailOption = {
        from : "abdulquadri <iamlanreadegbiji@gmail.com>",
        to : "iamlanreadegbiji@gmail.com",
        subject :"Contact Us Informations",
        text: "you have a new submission with the following details Name"+req.body.name+"Email"+req.body.email+"Message"+req.body.message,
        html :'<p>you have a new submission with the following details Name...</p><ul><li>'+req.body.name+'</li><li>Email'+req.body.email+'</li><li>Message'+req.body.message+'</ul>'
    };
    transporter.sendMail(mailOption,function(error,info){
        if (error){
            console.log(error);
            res.redirect('/');
        }else{
            console.log("Message Sent:"+info.response);
            res.redirect('/');
        }
    })
});


app.listen(3000);
console.log("its working Lori Iro");