const http = require('http');
// fais appel à un module qu'on a crée en partant du nom du dossier racine du projet en fonction de l'environnement dans lequel on est
const crawler = require(`${__dirname}/utils/htmlCrawler`);

let url = process.argv[2];

if(!url){
	console.log('You must include an url');
} else {
	url = 'http://www.'+url;
	// on récup l'url et on recois une réponse
	http.get(url, res => {
		// dans la réponse on a le statusCode
		console.log(`Response Status : ${res.statusCode}`);
		// on prépare le contenu de la réponse à afficher
		let content = '';
		// chaque x qu'on a des infos [on(data)] on les met dans une variable [chunk]
		res.on('data', chunk => {
			// on ajoute les infos recues dans le contenu créé avant
			content += chunk;
		});
		// quand on a récupéré tous les bouts de code
		res.on('end', () => {
			// on affiche le total dans les logs
			// console.log(content);
			// fais appel à la fonction du module externe en lui envoyant le txt et la balise recherchée
			crawler.saveTagToFile(content, 'title');
		});
	}).on('error', err => {
		console.log(`problem with request: ${err.message}`);
	});
}

/* Ma version
const options = {
  hostname: 'www.'+url,
  port: 80,
  method: 'POST',
  header: {
    'Content-Type': 'text/plain'
  }
};

// request c'est comme .get sauf qu'on doit appeller le .end à la fin tandis que .get le fait tt seul
const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${res.headers}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
  	console.log('=============================================');
    console.log('No more data in response.');
  })
});

req.on('error', (err) => {
  console.log(`problem with request: ${err.message}`);
});

req.end();
*/