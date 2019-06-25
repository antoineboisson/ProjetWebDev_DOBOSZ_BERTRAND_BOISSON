/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * Listener sur les entrées utilisateur : stockage des données
 * 
 */
window.addEventListener("load", function () {
    // Déclaration de l'index de parcours
    let i;

    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll("input");

    // Parcours de tabInputs en s'appuyant sur le nombre de <input>
    for (i = 0; i < tabInputs.length; i++) {

        // Ajout d'un Listener sur tous les <input> sur l'évènement onKeyUp
        tabInputs[i].addEventListener("keyup", recupInputs);
    }
});


/**
 * Fonction principale qui s'occupe de récupérer les valeurs puis les afficher
 * dans les champs correspondants sur la page.
 * 
 * @returns {undefined}
 */
function recupInputs() {
    // Déclaration et affectation des variables
    let rayon = recupValeur("#rayon_cyltronque");
    let hauteurMin = recupValeur("#hauteur_min_cyltronque");
    let hauteurMax = recupValeur("#hauteur_max_cyltronque");

    // Calcul et affichage du volume du cylindre tronqué
    afficheResultatCylindre(cylindreTronque(rayon, hauteurMin, hauteurMax));
}

/**
 * Fonction qui retourne un entier depuis une valeur prise dans le DOM
 * 
 * @param {String} id
 * @return {integer}
 */
function recupValeur(id) {
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}


/**
 * Fonction qui retourne le volume d'un cylindre tronqué d'après des parametres en entrée
 * 
 * @param {float} rayon
 * @param {float} hauteurMin
 * @param {float} hauteurMax
 * @return {float}
 */
function cylindreTronque(rayon, hauteurMin, hauteurMax) {
    const pi = 3.14159;
    let volume = pi * rayon * rayon * (hauteurMin + hauteurMax) / 2;
    return volume;
}


/**
 * Fonction qui affiche le volume du cylindre tronqué
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultatCylindre(nombre) {
    window.document.querySelector("#resultatCylindre").innerHTML =
            "Le volume du cylindre est de : " + nombre;
}