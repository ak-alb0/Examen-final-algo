function genererTableau(n) {
	let tab = [];

	for (let i = 0; i <= n; i++) {
		tab.push(i);
	}
	return tab;
}
console.log(genererTableau(4)); // Résultat attendu : [0, 1, 2, 3, 4]
