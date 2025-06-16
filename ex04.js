function compterLettre(texte, lettre) {
	let compteur = 0;

	for (let i = 0; i < texte.length; i++) {
		if (texte[i].toLowerCase() === lettre.toLowerCase()) {
			compteur++;
		}
	}
	return compteur;
}
console.log(compterLettre("Abracadabra", "a")); // Résultat attendu : 5
