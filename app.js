function alchimisation(valeur) {
    var valeur = document.querySelector('#valeur').value;
    var niveau = document.querySelector('#niveau').value;
    var de = document.querySelector('#de').value;
    var qualite = document.querySelector('#qualite').value;
    var equipement = document.querySelector('#equipement').value;
    var divise = Math.round(de / 30)

    return (valeur * 2 + qualite * 2) * ( (niveau + 1)  * divise) * equipement;
}
