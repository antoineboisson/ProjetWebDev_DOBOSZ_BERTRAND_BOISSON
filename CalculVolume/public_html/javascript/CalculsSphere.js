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
    // Déclaration et affectation de la variable
    let rayon = recupValeur("#rayon_sphere");

    // Calcul et affichage du volume de la sphère
    afficheResultat(sphere(rayon));
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
 * Fonction qui retourne le volume d'une sphere d'après des parametres en entrée
 * 
 * @param {float} rayon
 * @return {float}
 */
function sphere(rayon) {
    const pi = 3.14159;
    let volume = 4 * (pi * rayon * rayon * rayon) / 3;
    return volume;
}


/**
 * Fonction qui affiche le volume de la sphère
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultat(nombre) {
    window.document.querySelector("#resultat").innerHTML =
            "Le volume de la sphère est de : " + nombre;
}