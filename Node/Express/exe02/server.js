// code de création de serveur Node à trouver dans la doc

// récupère toutes les infos nécessaire à l'utilisation du protocole http
const http = require('http');

const fs = require('fs');

// récupère un module créé dans un autre fichier
const routesMgt = require('./modules/routesMgt');

// adresse et port pour accéder au site qu'on va créer
const hostname = '127.0.0.1';
const port = 3000;

// créer un serveur	
// récupère la requète et la réponse s'il y en a 1
const server = http.createServer((req, res) => {
	// récupère l'url de la requète [ce qui se trouve après le 127.0.0.1]
	let url = req.url; 
	// console.log(url);

	// indexOf retourne -1 s'il ne trouve pas ce qu'on lui envoie entre ()
	// permet de gérer les chemins des images
	if(url.indexOf('.jpg' || '.gif' || '.png') !== -1){
		res.statusCode = 200;
		// on stock le flux de données en prenant l'url et en la mettant dans le dossier public
		let readStream = fs.createReadStream(`public${url}`);
		// démarre le flux de données
		readStream.on('open', function(){
			// passe le flux de données au res
			readStream.pipe(res);
		});
		// en cas d'erreur
		readStream.on('error', function(err){
			// console.log(err);
			res.end(err);
		});
	// les pages sont gérées dans un autre fichier
	} else{
		routesMgt(req, res);
	}
});

// quand le serveur est lancé
server.listen(port, hostname, () => {
	// affiche un message dans l'invit de commande quand on tape "nodemon server.js"
	// tous les console.log() seront envoyés à l'invit de commande
	console.log(`Server running at http://${hostname}:${port}/`);
});