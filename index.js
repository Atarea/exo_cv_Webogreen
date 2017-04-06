/*mon taff
var CreerMenu = function(titre, actif){
  var menu = {}
    menu.titre = titre;
    menu.actif = actif;
return menu;
};
console.log(CreerMenu("Accueil", false));

/*function CreerMenu(titre, actif) {
  var menu = {
    titre,
    actif
  }
  return menu;
}
console.log(CreerMenu('Accueil', false));

var CreerTravaux = function(titre, vignette, technologie, date){
  var travaux = {}
    travaux.titre = titre;
    travaux.vignette = vignette;
    travaux.technologie = technologie;
    travaux.date = date;
return travaux;
};
console.log(CreerTravaux());

var menus = ["Accueil", "Formation", "Travaux", "Contact"];

console.log(menus);*/

var creerMenu = function(obj) {
  var titre = obj.titre;
  var actif = obj.actif;
  return {
    titre: titre,
    actif: actif
  };
};

var menus = [
creerMenu({titre: 'Accueil', actif: false}),
creerMenu({titre: 'Formation', actif: false}),
creerMenu({titre: 'Travaux', actif: false}),
creerMenu({titre: 'Contact', actif: false})
];

/*var tableau = [];
tableau.push(creerMenu({titre: 'Accueil', actif: false}));
tableau.pop();
console.log(tableau);

var travaux = [];
var creerTravaux = function(obj){
  var titre = obj.titre;
  var vignette = obj.vignette;
  var technologie = obj.technologie;
  var date = obj.date;
  return {
    titre: titre,
    vignette: vignette,
    technologie: technologie,
    date: date
  };
};

travaux.push(creerTravaux({
  titre: "CV HTML",
  vignette: "http://google.fr/images/monimage.jpg",
  technologie: "HTML / CSS",
  date: "15/12/2016-19:26"
}));

console.log(travaux);*/

for (var i = 0; i < menus.length; i++) {

  var nouvBouton = document.createElement("a");
  nouvBouton.setAttribute("href", "#" + menus[i].titre.toLowerCase());
  nouvBouton.setAttribute("class", "boutonmenu");
  nouvBouton.innerHTML+=menus[i].titre;
  nav = document.getElementsByClassName("navigation")[0];

nav.appendChild(nouvBouton);
}
