// The nodemailer module  makes it easier to send emails from your computer
//----------------------------------------------------------------------------------
// Google disabled less secure apps now so you need to setup Login with
// app password In summary you must setup your access with two factor authentication in
// order to allow the app password

// transport: {
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'contact@gmail.com',
//     pass: 'app password',
//   },
// }, 
var nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({
    
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        tls:true,
        auth : {
            user : "kumalsameer124@gmail.com",
            pass: "jdyctlhdoobvyrzy"
        },
    
    
});

var mailOptions = {
    from : "kumalsameer124@gmail.com",
    to: "b2.samir@cgim.edu.np",
    subject : "Sending mail using node js",
    text: "This is the 2nd mail using node, and it seems i have corrected the error i was facing before"
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);

    } else{
        console.log("Email sent: " + info.response);
    }
});