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
    let rayonMin = recupValeur("#rayon_min_conetronque");
    let rayonMax = recupValeur("#rayon_max_conetronque");
    let hauteur = recupValeur("#hauteur_conetronque");
    
    // Calcul et affichage du volume du cône tronqué
    afficheResultat(coneTronque(rayonMin, rayonMax, hauteur));
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
 * Fonction qui retourne le volume d'un cône tronqué d'après des parametres en entrée
 * 
 * @param {float} rayonmin
 * @param {float} rayonmax
 * @param {float} hauteur
 * @return {float}
 */
function coneTronque(rayonmin, rayonmax, hauteur) {
    const pi = 3.14159;
    let volume = hauteur * pi * (rayonmax * rayonmax + rayonmin * rayonmin + rayonmax * rayonmin) / 3;
    return volume;
}


/**
 * Fonction qui affiche le volume du cône tronqué
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultat(nombre) {
    window.document.querySelector("#resultat").innerHTML =
            "Le volume du cube est de : " + nombre;
}