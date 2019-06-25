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
    let rayon = recupValeur("#rayon_cyldroit_conedroit");
    let hauteur = recupValeur("#hauteur_cyldroit_conedroit");
    let base = recupValeur("#base_cyldroit_conedroit");

    // Calcul et affichage de l'aire de la base lorsque l'utilisateur entre un rayon
    document.querySelector("#rayon_cyldroit_conedroit").addEventListener("input", function () {
        rayon = recupValeur("#rayon_cyldroit_conedroit");
        afficheBase(calculBase(rayon));
    });

    // Calcul et affichage du rayon lorsque l'utilisateur entre l'aire de la base
    document.querySelector("#base_cyldroit_conedroit").addEventListener("input", function () {
        base = recupValeur("#base_cyldroit_conedroit");
        afficheRayon(calculRayon(base));
    });


    // Calcul et affichage du volume du cylindre (sur la page du cylindre)
    if (document.querySelector("#resultatCylindre"))
    {
        afficheResultatCylindre(cylindreDroit(base, rayon, hauteur));
    }

    // Calcul et affichage du volume du cône (sur la page du cône)
    if (document.querySelector("#resultatCone"))
    {
        afficheResultatCone(coneDroit(base, hauteur));
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
 * Fonction qui retourne le volume d'un cône droit d'après des parametres en entrée
 * 
 * @param {float} base
 * @param {float} hauteur
 * @return {float}
 */
function coneDroit(base, hauteur) {
    let volume = (base * hauteur) / 3;
    return volume;
}


/**
 * Fonction qui retourne le volume d'un cylindre droit d'apres des parametres en entrée
 * 
 * @param {float} base
 * @param {float} rayon
 * @param {float} hauteur
 * @return {float}
 */
function cylindreDroit(base, rayon, hauteur) {
    const pi = 3.14159;
    if (base === 0) {
        let volume = pi * rayon * rayon * hauteur;
        return volume;
    } else {
        let volume = base * hauteur;
        return volume;
    }
}


/**
 * Fonction qui calcule l'aire de la base en fonction du rayon
 * 
 * @param {float} rayon
 * @return {float}
 */
function calculBase(rayon) {
    const pi = 3.14159;
    let base = pi * rayon * rayon;
    return base;
}

/**
 * Fonction qui calcule le rayon en fonction de l'aire de la base
 * 
 * @param {float} base
 * @return {float}
 */
function calculRayon(base) {
    const pi = 3.14159;
    let rayon = Math.sqrt(base / pi);
    return rayon;
}


/**
 * Fonction qui affiche le volume du cône
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultatCone(nombre) {
    window.document.querySelector("#resultatCone").innerHTML =
            "Le volume du cône est de : " + nombre;
}

/**
 * Fonction qui affiche le volume du cylindre
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheResultatCylindre(nombre) {
    window.document.querySelector("#resultatCylindre").innerHTML =
            "Le volume du cylindre est de : " + nombre;
}


/**
 * Fonction qui affiche l'aire de la base
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheBase(nombre) {
    window.document.querySelector('#base_cyldroit_conedroit').value =
            nombre;
}

/**
 * Fonction qui affiche le rayon
 * 
 * @param {type} nombre
 * @return {undefined}
 */
function afficheRayon(nombre) {
    window.document.querySelector('#rayon_cyldroit_conedroit').value =
            nombre;
}