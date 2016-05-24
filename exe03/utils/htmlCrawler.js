const fs = require('fs');
// fait appel à un module qui permet de gérer le jQuery dans node => cf le site de npm
const cheerio = require('cheerio');

// fonction à appeller dans 1 autre module [server.js pour l'exercice] nommée saveTagToFile
module.exports.saveTagToFile = function(data, tagToSave){
	// définir que la manipulation de DOM via cheerio équivaut à la variable "$""
	let $ = cheerio.load(data);
	// du coup facile d'afficher le contenu de la balise voulue
	// console.log($(tagToSave).text());

	// récupérer les données et les enregistrer dans un fichier txt
	let titleDatas = $(tagToSave).text();
	fs.writeFile('datas.txt', titleDatas, (err) =>{
		if (err) throw err;
		console.log("---------------");
		console.log("It's saved !");
		console.log("---------------");
		console.log("Datas in the file :");
		console.log(titleDatas);
	});
}