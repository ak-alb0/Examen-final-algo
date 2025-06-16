function produitTotal(tab) {
	let produit = 1;
	for (let i = 0; i < tab.length; i++) {
		produit *= tab[i];
	}
	return produit;
}
console.log(produitTotal([1, 2, 3, 4])); // Résultat attendu : 24
