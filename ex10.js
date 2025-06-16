function compterImpairs(tab) {
	let compteur = 0;

	for (let i = 0; i < tab.length; i++) {
		if (tab[i] % 2 !== 0) {
			compteur++;
		}
	}
	return compteur;
}
console.log(compterImpairs([1, 2, 3, 4, 5])); // Résultat attendu : 3
