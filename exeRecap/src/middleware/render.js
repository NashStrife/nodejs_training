// crée la fonction Render() [avec une majuscule car c'est une class] qui est appellée quand on fait le require dans app.js
function Render(){
	let async = require('async');
	// on récupère le model créé pour gérer les pages
	let PagesModel = require(`${process.cwd()}/src/models/pages`);
	// et ceux pour le css et le js
	let cssMgt = require(`${process.cwd()}/src/utils/cssMgt`)();
	let jsMgt = require(`${process.cwd()}/src/utils/jsMgt`)();
	// on fait une instance du model pour pouvoir accéder à ses fonction internes
    let model = PagesModel();
    // on prépare les variables response et page qui seront définies pour laglobalité de cette fonction
    let response,page;
	// on crée la fonction middleware pour express qui va faire les traitements
	function middleware(req, res, next) {
		console.log('render');
	  	// stock le contenu de res [qui existe uniquement dans cette fonction] dans une variable accessible à la fonction sendPageAfterRender
	  	response = res;
	  	// vérifie si la page voulue existe via une fonction interne à notre PageModel()
	  	page = model.searchPageByUrl(req.url);
	  	// si la page existe
	  	if(page){
	  		// fait appel à une fonction du module async qui permet de gérer plusieurs fonctions asynchrones en même temps
	  		async.parallel([
	  			// on leur passe la fonction de callback [cb] qui va passer de fonction en fonction 
	  				function(cb) {
	  					// on appelle la fonction render de cssMgt.js qu'on a créé dans le dossier "utils" en lui envoyant la fonction callback pour passer à la suite
	  					cssMgt.render(page, cb);
	  				},
	  				function(cb) {
	  					jsMgt.render(page, cb);
	  				}
	  			// pour finir par appeller la fonction qui affiche la page quand tout est chargé
	  			], sendPageAfterRender);
	  	} else{
	  		// sinon on passe à la suite [ici la suite dans app.js est la gestion des erreurs]
	        next();
	  	}
	}


	function sendPageAfterRender(){
		console.log('renderPage');
        // on ajoute le chemin des fichiers minifiés dans l'objet page [qui contient les infos de pages.json]
        page.styles=`/styles/${page.name}.min.css`;
        page.scripts=`/scripts/${page.name}.min.js`;
        // rendu de la page avec les données contenues dans le fichier pages.json et les infos qui seront contenues dans la variable "model"
        // ici on utilise "response" et pas "res" car c'est une variable qui n'existe que dans la fonction middleware
        response.render(page.template,{layout:page.layout,model:page});
    }

	// on retourne le middleware pour pouvoir appeller la fonction avec render() si on a définit const render = require(...);
	return middleware;
}
	

module.exports = Render;

// vieille version pour appeller un module de gestion du css créé à la main sans
// on appelle la fonction render de cssMgt.js qu'on a créé dans le dossier "utils" en lui envoyant la fonction qui va afficher la page pour sa callback
// cssMgt.render(page,sendPageAfterRender);