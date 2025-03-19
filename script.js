function calcul() {
    const nom= document.getElementById("p1").value; // Récupération du nom de l'article
    const quantite = parseInt(document.getElementById("q1").value); // Conversion en nombre entier
    const prix = parseFloat(document.getElementById("pq").value); // Conversion en nombre flottant

    if (nom && quantite > 0 && prix > 0) {
        // Vérification que les champs sont remplis et que les valeurs sont positives
        document.getElementById("resultat").innerText =
            `Vos ${quantite} ${nom}(s) coûtent ${quantite * prix} FCFA.`;
    } else {
        // Message d'erreur si les champs sont invalides
        alert("Veuillez remplir tous les champs avec des valeurs valides !");
    }
}

    
