let express = require('express');
let morgan = require('morgan');
let exphbs  = require('express-handlebars');
let bodyParser = require('body-parser');
// récupère notre beau middleware créé dans le dossier middleware
let renderMwr = require(`${__dirname}/middleware/render`);
let error = require(`${__dirname}/middleware/error`);
let sendRoute = require(`${__dirname}/routes/sendRoute`);

let app = express();

let hbsOptions = {
	defaultLayout : 'main',
	extname : '.hbs'
};

let hbs = exphbs.create(hbsOptions);

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static('public'));

// permet de récupérer des infos des requètes html et les traiter avec body-parser pour en faire des trings utilisables
app.use(bodyParser.urlencoded({ extended: false }));

// fait appel à morgan qui est un module ajouté à nodejs pour gérer les logs
// app.use(morgan('combined'));

// tout les "/send" passe par cette route
app.use('/send', sendRoute);

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