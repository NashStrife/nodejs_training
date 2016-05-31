let express = require('express');
let fs = require('fs');
// let nodemailer = require('nodemailer');
// let config = require(`${process.cwd()}/src/config.js`)

let router = express.Router();

let filePath = `${process.cwd()}/datas/log_mail.txt`;

// on est dans "/send" [qui devient la racine de cette fonction] donc avec "/" on traite les infos de "/send"
router.post('/', function(req,res){
   	console.log(req.body);
   	// A partir d'ici le module ne fonctionne que si on a un smtp qui tourne derrière, problèmes de conflits de sécurité avec gmail 
   	// var transporter = nodemailer.createTransport(`smtps://${config.user}:${config.pwd}@gmail.com`);
   	//  // setup e-mail data with unicode symbols
   	//  var mailOptions = {
   	//      from: '"Sebastien" <jac.sebastien@gmail.com>',
   	//      to: `${req.body.email}`,
   	//      subject: `Contact from ${req.body.name} from our website`,
   	//      text: 'Hello world ', 
   	//      html: '<b>Hello world</b><br/>' 
   	//  };

   	//  // send mail with defined transport object
   	//  transporter.sendMail(mailOptions, function(error, info) {
   	//      if (error) {
   	//           res.send(error);
   	//      }
   	//     res.send('Message sent: ');
   	//  });
	let inData = `name: ${req.body.name} || email: ${req.body.email},\n`;
   	fs.appendFile(filePath, inData, 'utf8', function(err){
	  	if (err) console.log(err);
	  	console.log('The "data to append" was appended to file!');
	  	console.log(inData);
	  	console.log('-------------------------------------------');
	  	// renvoie vers la page home
	  	res.redirect('/');
	});
});

module.exports=router;