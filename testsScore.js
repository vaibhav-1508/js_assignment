function getScore(jestObject) {
	// Initiliaze score trackers
	let totalScore = 0;
	let score = 0;
	const moduleScores = {
		Arrays: 0,
		Numbers: 0,
		Strings: 0,
		"Conditionals and Loops": 0,
	};
	const moduleTotalScores = {
		Arrays: 0,
		Strings: 0,
		"Conditionals and Loops": 0,
		Numbers: 0,
	};

	// Populate the results
	jestObject.testResults.forEach((testResult) => {
		testResult.testResults.forEach((test) => {
			// Get the constants
			const category = test.ancestorTitles[0];
			const points = parseInt(test.title.split(" ")[0].slice(1));

			// Update totals
			totalScore += points;
			moduleTotalScores[category] += points;

			// Update scores if passed
			if (test.status === "passed") {
				score += points;
				moduleScores[category] += points;
			}
		});
	});

	// Log results to terminal
	console.log("\n\n");
	console.log(`You scored ${score}/${totalScore} points.\n\nHere are your module-wise scores:`);
	for (mod in moduleScores) console.log(`${mod}\t: ${moduleScores[mod]}/${moduleTotalScores[mod]}`);

	return jestObject;
}

module.exports = getScore;
