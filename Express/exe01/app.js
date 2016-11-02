// ouvrir le fichier txt dans node et afficher le contenu
// dire le nombre de lignes qu'il y a dans le fichier

// ajouter des noms dans le fichier en les passant en argument en ligne de commande séparés par des virgules
// ex: node app.js jule,tom,david

// console.log("test d'application");

// il faut importer le module "fs" pour pouvoir traiter des fichiers on le stock dans une variable restreinte avec let nomDeLaVariable
let fs = require('fs');
// récupère le l'argument envoyé via node [0 = qui a lancé la commande, 1 = nom du fichier atteint]
let names = process.argv[2];
let filePath = 'test1.txt';



// on lit le fichier en précisant qu'il doit le traduire en "utf8" sinon il affiche le flux de données
fs.readFile(filePath, 'utf8', function(err, data){ // on récup l'erreur s'il y en a 1 et les données du fichier
	// s'il y a 1 erreur => stop tout
	if (err) throw err;
	// si tout est ok affiche le contenu du fichier
	// console.log(data);
	// stock le nombre de lignes dans 1 array
	// var lines = data.split("\r");
	// console.log("-----------------------------------------");
	// // affichage avec es6 pour afficher des variable plus facilement en comptant le nombre d'éléments dans l'array
	// console.log(`Ce fichier contient ${lines.length} lignes`);
	
	// si names est défini [on a entré un paramètre dans la ligne de commande]
	if(names){
		// récupère le contenu du fichier et concatène les nouveaux à la suite avec un retour à la ligne
		let inData = data+names.replace(/,/g, '\n')+'\n';
		// écrase le contenu du fichier avec le nouveau concaténé
		fs.writeFile(filePath, inData, (err) =>{
			if (err) throw err;
			console.log("It's saved !");
			console.log("-----------------------------------------");
			console.log("List of names in this file :");
			console.log(inData);
		});
	} else{ // sinon on liste simplement les noms dans le fichier
		console.log("-----------------------------------------");
		console.log("List of names in this file :");
		console.log(data);
	}
  
});



// ajoute à la fin du fichier
// fs.appendFile('test1.txt', 'noms a ajouter', 'utf8', function(err){
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });