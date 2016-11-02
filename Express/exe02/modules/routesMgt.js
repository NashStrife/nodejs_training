const fs = require('fs');

const validUrls = {
	'/page1': 'public/page1.html',
	'/page2': 'public/page2.html',
	'/': 'public/index.html'
};
// on doit mettre la fonction dans une module pret à l'export pour l'utiliser ailleurs dans le code
module.exports = function(req, res){
	// console.log(validUrls[req.url]);

	// si l'url entrée fait partie de la liste des url valides
	if(validUrls[req.url]) {
		// statuts code pour la réponse "tout s'est bien passé"
		res.statusCode = 200;		
		// définit l'en-tête en disant qu'on va envoyer une page html
		res.setHeader('Content-Type', 'text/html');	
		// on lit le fichier qui correspond à notre url
		fs.readFile(validUrls[req.url], 'utf8', function(err, data){
			if (err) throw err;
			// on revoie le contenu de la page stocké dans data
		  	res.end(data);	
		});
	// sinon la page n'existe pas
	} else {
		// erreur 404
		res.statusCode = 404;
		// définit l'en-tête en disant qu'on va envoyer du txt seul
		res.setHeader('Content-Type', 'text/plain');	
		res.end('Page not found ! =)');
	}
}