function Erreur() {
	// ici pas de "next" car c'est une erreur donc bloquant
	function middleware(req, res) {
		// on crée un nouvel objet error existant avec le framework express
		let err = new Error('Not Found');
		err.status = 404;
		res.status(404);
		// res.send(`Page ${req.url} give this error : ${err.message}`);
		res.render('404', {err});
	}

	return middleware;
}

module.exports = Erreur;