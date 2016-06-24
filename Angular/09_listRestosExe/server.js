let express = require('express');
let app = express();


// if we use a static route
app.use(express.static('public'));

// we go to the / url and not /api/...
app.use('/', function(req, res){
    res.status(200);	// avec express plus besoin d'envoyer des statuts il le fait tt seul
  	res.sendFile(`${process.cwd()}/public/index.html`);
});

app.use(function(err,req,res,next){
   console.log(err.message);
   res.status(500).send('Oops server is in a bad mood !'); 
});

module.exports = app;
app.listen(3000, function(){
    console.log('Listening on port 3000');
});