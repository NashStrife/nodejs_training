// on récupère le module express js
const express = require('express');
// et celui de handlebars cf express handlebars sur github
const exphbs  = require('express-handlebars');
// app devient l'exécution de express
const app = express();

// stocker le chemin d'exécution du fichier actuel donc là ou s'exécute node et pas le chemin du fichier appellé
const root = process.cwd();

// définit que l'extension des fichiers sera .hbs et que le layout par défaut est main.hbs
let hbs = exphbs.create({
	defaultLayout : 'main',
	extname : '.hbs',
	// envoie des variables à la page avec des helpers grace à handlebars
	helpers : {
		// renvoie la date
		crie : function(){return new Date();},
		// et on récupère une variable qu'on va transformer en majuscules et renvoyer
		yell : function(str){return str.toUpperCase()}
	}
});

// définit le moteur de rendu hbs en disant qu'on passe par l'objet créé + haut au lieu de l'engine par défaut
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// définit dans quel dossier se trouvent les fichiers "statiques" [ex: images/css/js/...]
app.use(express.static('public'));

// quand on arrive avec 1 "/"
app.get('/', function (req, res) {
	// res.status(200);	// avec express plus besoin d'envoyer des statuts il le fait tt seul
  	// res.sendFile(`${root}/public/index.html`);

  	// affiche le contenu de home avec le template layouts/main.hbs définit en haut
  	res.render('home',{data:{name:'sebastien', title:'training'}});
});

app.get('/page1', function (req, res) {
  	// on affiche le contenu de page2.hbs avec comme template layouts/page.hbs
  	res.render('page1', {layout: 'pages'});
});

// quand on appelle le fichier dans la console avec node, lance le serveur
app.listen(3000, function () {
  	console.log('Example app listening on port 3000!');
});