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
    let base = recupValeur("#base_Prisme_Pyramide_Octa");
    let hauteur = recupValeur("#hauteur_Prisme_Pyramide_Octa");


    // Calcul et affichage du volume de la pyramide (sur la page de la pyramide)
    if (document.querySelector("#resultatPyramide"))
    {
        afficheResultatPyramide(pyramide(base, hauteur));
    }

    // Calcul et affichage du volume du prisme droit (sur la page du prisme droit)
    if (document.querySelector("#resultatPrisme"))
    {
        afficheResultatPrisme(prismeDroit(base, hauteur));
    }

    // Calcul et affichage du volume de l'octaèdre (sur la page de l'octaèdre)
    if (document.querySelector("#resultatOctaedre"))
    {
        afficheResultatOctaedre(octaedre(base, hauteur));
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
 * Fonction qui retourne le volume d'un octaèdre d'après des parametres en entrée
 * 
 * @param {float} base
 * @param {float} hauteur
 * @return {float}
 */
function octaedre(base, hauteur) {
    let volume = 2 * (base * hauteur) / 3;
    return volume;
}


/**
 * Fonction qui retourne le volume d'une pyramide d'après des parametres en entrée
 * 
 * @param {float} base
 * @param {float} hauteur
 * @return {float}
 */
function pyramide(base, hauteur) {
    let volume = (base * hauteur) / 3;
    return volume;
}


/**
 * Fonction qui retourne le volume d'un prisme droit d'apres des parametres en entrée
 * 
 * @param {float} base
 * @param {float} hauteur
 * @return {float}
 */
function prismeDroit(base, hauteur) {
    let volume = base * hauteur;
    return volume;
}


/**
 * Fonction qui affiche le volume de l'octaèdre
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultatOctaedre(nombre) {
    window.document.querySelector("#resultatOctaedre").innerHTML =
            "Le volume de l'octaèdre est de : " + nombre;
}

/**
 * Fonction qui affiche le volume de la pyramide
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultatPyramide(nombre) {
    window.document.querySelector("#resultatPyramide").innerHTML =
            "Le volume de la pyramide est de : " + nombre;
}

/**
 * Fonction qui affiche le volume du prisme droit
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultatPrisme(nombre) {
    window.document.querySelector("#resultatPrisme").innerHTML =
            "Le volume du prisme est de : " + nombre;
}