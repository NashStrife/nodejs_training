let express = require('express');
let nodemailer = require('nodemailer');
let config = require(`${process.cwd()}/src/config.js`)

let router = express.Router();

// on est dans "/send" [qui devient la racine de cette fonction] donc avec "/" on traite les infos de "/send"
router.post('/', function(req,res){
   console.log(req.body);
   // A partir d'ici le module ne fonctionne que si on a un smtp qui tourne derrière, problèmes de conflits de sécurité avec gmail 
   var transporter = nodemailer.createTransport(`smtps://${config.user}:${config.pwd}@gmail.com`);
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Sebastien" <jac.sebastien@gmail.com>',
        to: `${req.body.email}`,
        subject: `Contact from ${req.body.name} from our website`,
        text: 'Hello world ', 
        html: '<b>Hello world</b><br/>' 
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
             res.send(error);
        }
       res.send('Message sent: ');
    });
});

module.exports=router;