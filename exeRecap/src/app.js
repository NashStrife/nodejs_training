const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
// récupère notre beau middleware créé dans le dossier middleware
const renderMwr = require(`${__dirname}/middleware/render`);
const error = require(`${__dirname}/middleware/error`);

const app = express();

let hbsOptions = {
	defaultLayout : 'main',
	extname : '.hbs'
};

let hbs = exphbs.create(hbsOptions);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static('public'));

// fait appel à morgan qui est un module ajouté à nodejs pour gérer les logs
app.use(morgan('combined'));

// on fait appel à la fonction renderMwr créée dans le middleware render.js grace au "return middleware;"
app.use(renderMwr());

// si problème avec les rendus au dessus, on affiche les erreurs
app.use(error());

// quand on appelle le fichier depuis un autre en node renvoie les infos de l'application lancée en haut du fichier
module.exports = app;


// use fait qqch peut importe la requète [get, post,...] si on ne précise pas next la fonction middleware est bloquante
// app.use((req, res, next)=>{
// 	console.log(req.url);
// 	next();
// });

// afficher une mage manuellement
// app.get("/", function(req, res){
// 	// renvoie les données à la page en transformant l'objet en string
// 	res.send(`The pages are : ${JSON.stringify(datas.pages)}`);
// });