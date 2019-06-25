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
    let longueur = recupValeur("#longueur_para_rect");
    let largeur = recupValeur("#largeur_para_rect");
    let hauteur = recupValeur("#hauteur_para_rect");
    let base = recupValeur("#base_para_rect");

    // Calcul et affichage de l'aire de la base lorsque la largeur est non nulle
    // et que l'utilisateur entre une longueur
    document.querySelector("#longueur_para_rect").addEventListener("input", function () {
        if (document.querySelector("#largeur_para_rect").value !== "0")
        {
            longueur = recupValeur("#longueur_para_rect");
            base = calculBase(longueur, largeur);
            afficheBase(base);
        }
    });

    // Calcul et affichage de l'aire de la base lorsque la longueur est non nulle
    // et que l'utilisateur entre une largeur
    document.querySelector("#largeur_para_rect").addEventListener("input", function () {
        if (document.querySelector("#longueur_para_rect").value !== "0")
        {
            largeur = recupValeur("#largeur_para_rect");
            base = calculBase(longueur, largeur);
            afficheBase(base);
        }
    });

    // Mise à zéro de la longueur et de la largeur lorsque l'utilisateur entre l'aire de la base
    document.querySelector("#base_para_rect").addEventListener("input", function () {
        document.querySelector("#longueur_para_rect").value = 0;
        document.querySelector("#largeur_para_rect").value = 0;
    });

    // Affichage du volume du parallélépipède rectangle
    afficheResultat(parallelepipedeRectangle(base, hauteur));
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
 *Fonction qui retourne le volume d'un parallélépipède rectangle d'apres des parametres en entrée
 * 
 * @param {float} base
 * @param {float} hauteur
 * @return {float}
 */
function parallelepipedeRectangle(base, hauteur) {
    let volume = base * hauteur;
    return volume;
}


/**
 * Fonction qui affiche le volume du parallélépipède rectangle
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultat(nombre) {
    window.document.querySelector("#resultat").innerHTML =
            "Le volume du cube est de : " + nombre;
}


/**
 * Fonction qui calcule l'aire de la base en fonction de la longueur et de la largeur
 * 
 * @param {float} longueur
 * @param {float} largeur
 * @return {float}
 */
function calculBase(longueur, largeur) {
    let base = longueur * largeur;
    return base;
}


/**
 * Fonction qui affiche l'aire de la base
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheBase(nombre) {
    window.document.querySelector('#base_para_rect').value =
            nombre;
}
