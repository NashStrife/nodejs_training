let monObjet = {
    name : "monNom",
    calcul : function(a, b){
        return (a + b);
    },
    hurle : function(str){
        return str.toUpperCase();
    }
};

console.log(monObjet.calcul(3,4));
console.log(monObjet.hurle("J'ai faim"));




function test(){
    console.log(arguments);
}

// renvoie une liste style {'0' : 1, '1' : 'sebastien}
test(1, 'sebastien'); 




var arNames = ['sebastien', 'mathieu', 'jonathan', 'alexandre'];
// .map() évite de devoir faire une boucle for pour lister chaque élément
arNames.map(function(name){
    // affiche les noms les uns après les autres en leur applicant la fonction toUpperCase() au fur et à mesure
   console.log(name.toUpperCase());
});