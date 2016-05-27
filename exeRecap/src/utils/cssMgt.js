// cf https://www.npmjs.com/package/node-minify [installer aussi clean-css]
let compressor = require('node-minify');
let fs = require('fs');
let devMode = true;
function CssMgt() {
	// on passe à la fonction les infos de la page ET la fonction qui sera appellée dans le callback [une fois le minify appliqué]
    function render(page,cb) {
        let file = `public/styles/${page.name}.min.css`;
        // si devMode == true on minify à chaque x qu'on affiche une page pour appliquer les dernières modifs
        if(devMode){
             new compressor.minify({
                type: 'clean-css',
                fileIn: page.css,
                // qu'on stock dans un nouveau dossier "styles"
                fileOut: `public/styles/${page.name}.min.css`,
                // une fois le minify terminé
                callback: function(err, min) {
                    console.log('Clean-css');
                    if(err) console.log(err);
                    // on appelle la fonction passée en paramètre de render() pour afficher la page qu'on demande
                    cb();
                }
            });
        } else {
            // on vérifie que le fichier existe déjà
            fs.stat(file, (err, stats) => {
                if (err) console.log(err);
                // si oui on passe direct à la suite
                if(stats){
                    cb();
                // si non on fait le minify
                } else {
                    // on minifie et concatène les fichiers css utilisés pour la page en cours via node-minify
                    new compressor.minify({
                        type: 'clean-css',
                        fileIn: page.css,
                        // qu'on stock dans un nouveau dossier "styles"
                        fileOut: `public/styles/${page.name}.min.css`,
                        // une fois le minify terminé
                        callback: function(err, min) {
                            console.log('Clean-css');
                            if(err) console.log(err);
                            // on appelle la fonction passée en paramètre de render() pour afficher la page qu'on demande
                            cb();
                        }
                    });
                }
            });
        }
    }
    let that = {};
    that.render = render;
    return that;
}

module.exports = CssMgt;