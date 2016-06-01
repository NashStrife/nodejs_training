let express = require('express');
let bodyParser = require('body-parser');
let api = require('./api/api');
let logger = require(`${process.cwd()}/server/utils/logger`);
let app = express();

// middleware qui permet de récupérer le contenu de req.body et le traite en json dans les controllers
app.use(bodyParser.json());

// quand on tape "/api" on lit le fichier api.js grace au require
app.use('/api', api);

// en cas d'erreur
app.use(function(err,req,res,next){
   logger.log(err.message);
   res.status(500).send('Oops server is in a bad mood !'); 
});

module.exports = app;
