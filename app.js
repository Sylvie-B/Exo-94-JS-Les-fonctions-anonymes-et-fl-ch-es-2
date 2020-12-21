let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

// à partir du tableau 1
let newDiv = document.createElement('div');

let point1 = tableauUn.map(nbr => nbr**nbr);

let point2 = tableauUn.map(nbr => nbr * 10);

let point3 = tableauUn.map(nbr => (nbr + 2)/45);

let point4 = tableauUn.filter(item => item > 2);

let point5 = tableauUn.filter(item => item % 2 === 0);

let point6 = tableauUn.filter(item => item * 3 > 10);

// à partir du tableau 2
let point7 = tableauDeux.map(element => element.length);

let point8 = tableauDeux.map(element => "<br> L'élément " + element + " à une longueur de " + element.length);

let point9 = tableauDeux.map(element => element + element);

let point10 = tableauDeux.filter(element => element.length > 2 + 2);

let point11 = tableauDeux.filter(element => element.length % 2 === 0);

let point12 = tableauDeux.filter(element => element.length -3 > 10);

recap(point1, point2, point3, point4, point5, point6, point7, point8, point9, point10, point11, point12);

function recap(...table) {
    for(let item in table){
        newDiv.style.margin = '10px';
        newDiv.innerHTML += table[item] + '<br>';
        document.body.appendChild(newDiv);
    }
}
