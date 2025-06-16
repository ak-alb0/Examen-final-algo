function motLePlusLong(phrase) {
	let mots = phrase.split(" ");
	let maxMot = mots[0];

	for (let i = 1; i < mots.length; i++) {
		if (mots[i].length > maxMot.length) {
			maxMot = mots[i];
		}
	}
	return maxMot;
}
console.log(motLePlusLong("Bonjour à tous et bienvenue")); // Résultat attendu : "bienvenue"
