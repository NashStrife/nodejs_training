// on récupère le module express js
const express = require('express');
// app devient l'exécution de express
const app = express();

// stocker le chemin d'exécution du fichier actuel donc là ou s'exécute node et pas le chemin du fichier appellé
const root = process.cwd();

// quand on arrive avec 1 /
app.get('/', function (req, res) {
	res.status(200);
  	res.sendFile(`${root}/public/index.html`);
});

app.listen(3000, function () {
  	console.log('Example app listening on port 3000!');
});