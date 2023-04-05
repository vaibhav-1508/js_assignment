function getScore(jestObject) {
	let totalScore = 0;
	let score = 0;

	jestObject.testResults.forEach((testResult) => {
		testResult.testResults.forEach((test) => {
			const points = parseInt(test.fullName.split(" ")[0].slice(1));
			totalScore += points;
			if (test.status === "passed") {
				score += points;
			}
		});
	});

	console.log("\n\n");
	console.log(`You scored ${score}/${totalScore} points.`);

	return jestObject;
}

module.exports = getScore;
