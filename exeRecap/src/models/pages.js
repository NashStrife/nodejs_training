const fs = require('fs');
// module a ajouter à node pour faire des recherches optimisées [cf: lofash.com]
const _ = require('lodash');

const root = process.cwd();
// récupère les données contenues dans le fichier json et les transforme en un objet javascript
const datas = JSON.parse(fs.readFileSync(`${root}/datas/pages.json`, 'utf8'));

function PagesModel(){
	// la fonction PagesModel() contient plusieurs fonctions appellées en fonction des besoins
	function searchPageByUrl(urlStr){
		// renvoie true s'il trouve une correspondance dans le fichier "pages.json", sinon renvoie "undefind"
		return _.find(datas.pages, {url:urlStr});
	}

	// on créée un objet qui va contenir les fonction accessibles depuis un autre fichier [équivalent de "public" en java]
	let that = {};
	// ajoute les fonctions voulues à l'objet
	that.searchPageByUrl = searchPageByUrl;
	// renvoie les fonctions => ce qu'on récupère quand on appelle la fonction PagesModel()
	return that;
}

module.exports = PagesModel;