let express = require('express');
let api = require('./api/api');
let logger = require(`${process.cwd()}/server/utils/logger`);
let app = express();


app.use('/api', api);

app.use(function(err,req,res,next){
   logger.warn(err.message);
   res.status(500).send('Oops server is in a bad mood !'); 
});

module.exports = app;