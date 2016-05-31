let express = require('express');
let bodyParser = require('body-parser');
let api = require('./api/api');
let app = express();

// permet de récupérer le contenu de req.body et le traite en json dans les controllers
app.use(bodyParser.json());

// quand on tape "/api" on lit le fichier api.js grace au require
app.use('/api', api);

module.exports = app;
