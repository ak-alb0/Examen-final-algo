function tousPositifs(tab) {
	for (let i = 0; i < tab.length; i++) {
		if (tab[i] < 0) {
			return false;
		}
	}	
	return true
}
console.log(tousPositifs([2, 5, 7])); // Résultat attendu : true
console.log(tousPositifs([2, -1, 7])); // Résultat attendu : false
