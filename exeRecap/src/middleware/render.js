// crée la fonction Render() [avec une majuscule car c'est une class] qui est appellée quand on fait le require dans app.js
function Render(){
	// on récupère le model créé pour gérer les pages
	const PagesModel = require(`${process.cwd()}/src/models/pages`);
	// on fait une instance du model pour pouvoir accéder à ses fonction internes
    const model = PagesModel();

    
	// on crée la fonction middleware pour express qui va faire les traitements
	function middleware(req, res, next) {
	  	console.log('render');
	  	// vérifie si la page voulue existe via une fonction interne à notre PageModel()
	  	let page = model.searchPageByUrl(req.url);

	  	if(page){
	  		console.log(page);
	  		// si la page existe on affiche ses données via une autre fonction de notre PageModel()
	  		res.render(page.template, {layout: page.layout});
	  		// res.send(`Page Found !`);
	  	} else{
	  		// sinon on passe à la suite [ici la suite dans app.js est la gestion des erreurs]
	        next();
	  	}
	}

	// on retourne le middleware pour pouvoir appeller la fonction avec render() si on a définit const render = require(...);
	return middleware;
}
	

module.exports = Render;