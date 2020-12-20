let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
let newDiv = document.createElement('div');

let point1 = tableauUn.map(nbr => nbr**nbr);

let point2 = tableauUn.map(nbr => nbr * 10);

let point3 = tableauUn.map(nbr => (nbr + 2)/45);





let recap = [
    point1,
    point2,
    point3
]

for (let table in recap){
    for(let item in recap[table]){
        newDiv.innerHTML += recap[table][item] + '<br>';
        document.body.appendChild(newDiv);
    }
}

