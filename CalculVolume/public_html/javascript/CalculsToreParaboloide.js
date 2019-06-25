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
    let rayon = recupValeur("#rayon_tore_para");
    let hauteur = recupValeur("#hauteur_tore_para");

    // Calcul et affichage du volume du tore
    if (document.querySelector("#resultatTore"))
    {
        afficheResultatTore(tore(rayon, hauteur));
    }

    // Calcul et affichage du volume de la paraboloïde
    if (document.querySelector("#resultatPara"))
    {
        afficheResultatPara(paraboloide(rayon, hauteur));
    }


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
 * Fonction qui retourne le volume d'une paraboloïde d'après des paramètres en entrée
 * 
 * @param {float} rayon
 * @param {float} hauteur
 * @return {float}
 */
function paraboloide(rayon, hauteur) {
    const pi = 3.14159;
    let volume = (pi * rayon * rayon * hauteur) / 2;
    return volume;
}


/**
 * Fonction qui retourne le volume d'un tore d'après des parametres en entrée
 * 
 * @param {float} rayon
 * @param {float} hauteur
 * @return {float}
 */
function tore(rayon, hauteur) {
    const pi = 3.14159;
    let volume = 2 * pi * pi * rayon * rayon * hauteur;
    return volume;
}


/**
 * Fonction qui affiche le volume d'une paraboloïde
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultatPara(nombre) {
    window.document.querySelector("#resultatPara").innerHTML =
            "Le volume de la paraboloïde est de : " + nombre;
}

/**
 * Fonction qui affiche le volume d'un tore
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultatTore(nombre) {
    window.document.querySelector("#resultatTore").innerHTML =
            "Le volume de la tore est de : " + nombre;
}