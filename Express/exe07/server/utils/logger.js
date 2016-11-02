// on ajouter le module colors à la bibliothèque string déjà existante
require('colors');
const config = require('../config/config');
const _ = require('lodash');

// affiche le contenu de "logging" stocké dans l'objet config du fichier config/config.js
// console.log(config.logging);

// crée 1 fonction qui ne fait rien qu'on va utiliser si on définit config.loggin sur false
let noop = function(){};

// si config.logging est définit sur "true" [grace à une condition ternaire], 
// récupère les console.log envoyé dans la console et les stock dans la variable consoleLog
let consoleLog = config.logging ? console.log.bind(console) : noop;

// logger est l'objet appellée depuis l'extérieur grace à l'export en bas du code
let logger = {
    // créer 1 fonction "log" à l'intérieur de l'objet logger [cf ex08]
    log: function() {
        // définit le 
        let tag = '[LOG]'.green;
        // récupère la liste des arguments envoyés à la fonction [cf ex8] et les transforme en array grace à lodash
        let args = _.toArray(arguments)
        // pour chaque élément [cf exe08]
            .map(function(arg){
                // si c'est un objet
                if(typeof arg === 'object'){
                    // on récupère l'objet et on le transforme en string
                    let str = JSON.stringify(arg);
                    // on renvoie toutes les données traitées avec les couleurs voulues
                    return `${tag} ${str.cyan}`;
                } else {
                    return `${tag} ${arg.cyan}`;
                }
            });
            // on réapplique les modifs qu'on a faites au console.log stocké dans la variable 
            consoleLog.apply(console, args);
    }
}

module.exports = logger;