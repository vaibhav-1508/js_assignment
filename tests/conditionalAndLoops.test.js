const {
	getFizzBuzz,
	getFactorial,
	getSumBetweenNumbers,
	isTriangle,
	reverseString,
	isBracketsBalanced,
	timespanToHumanString,
	toNaryString,
} = require("../src/conditionalAndLoops");

test(`(5 pts) Testing getFizzBuzz`, () => {
	// Get numbers
	[
		1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28, 29, 31, 32, 34, 37, 38, 41, 43, 44, 47,
		49, 52, 53, 56, 58, 59, 61, 62, 64, 67, 68, 71, 73, 74, 76, 77, 79, 82, 83, 86, 88, 89, 91, 92,
		94, 97, 98,
	].forEach((num) => expect(getFizzBuzz(num)).toEqual(num));

	// Get Fizz
	[
		3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57, 63, 66, 69, 72, 78, 81, 84, 87, 93,
		96, 99,
	].forEach((num) => expect(getFizzBuzz(num)).toEqual("Fizz"));

	// Get Buzz
	[5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100].forEach((num) =>
		expect(getFizzBuzz(num)).toEqual("Buzz")
	);

	// Get FizzBuzz
	[15, 30, 45, 60, 75, 90].forEach((num) => expect(getFizzBuzz(num)).toEqual("FizzBuzz"));
});

test(`(10 pts) Testing getFactorial`, () => {
	expect(getFactorial(1)).toEqual(1);
	expect(getFactorial(5)).toEqual(120);
	expect(getFactorial(10)).toEqual(3628800);
});

test(`(10 pts) Testing getSumBetweenNumbers`, () => {
	[
		{ n1: 1, n2: 2, expected: 3 },
		{ n1: 5, n2: 10, expected: 45 },
		{ n1: -1, n2: 1, expected: 0 },
	].forEach((data) => expect(getSumBetweenNumbers(data.n1, data.n2)).toEqual(data.expected));
});

test(`(15 pts) Testing isTriangle`, () => {
	[
		{ sides: [1, 2, 3], expected: false },
		{ sides: [3, 4, 5], expected: true },
		{ sides: [10, 1, 1], expected: false },
		{ sides: [10, 10, 10], expected: true },
	].forEach((data) => {
		[
			[0, 1, 2],
			[0, 2, 1],
			[1, 2, 0],
			[1, 0, 2],
			[2, 0, 1],
			[2, 1, 0],
		].forEach((idx) =>
			expect(isTriangle(data.sides[idx[0]], data.sides[idx[1]], data.sides[idx[2]])).toEqual(
				data.expected
			)
		);
	});
});

test(`(5 pts) Testing reverseString`, () => {
	[
		{
			str: "The quick brown fox jumps over the lazy dog",
			expected: "god yzal eht revo spmuj xof nworb kciuq ehT",
		},
		{ str: "abracadabra", expected: "arbadacarba" },
		{ str: "rotator", expected: "rotator" },
		{ str: "noon", expected: "noon" },
	].forEach((data) => expect(reverseString(data.str)).toEqual(data.expected));
});

test(`(30 pts) Testing isBracketBalanced`, () => {
	// Check for balanced sequences
	[
		"[]",
		"[[][][[]]]",
		"[[][]]",
		"",
		"<>",
		"{}",
		"()",
		"<()>",
		"{<>}",
		"[{}]",
		"[{(<()[]{}<>>)}]",
		"{}<>()[]",
		"{<>}{()}[[]](())",
	].forEach((seq) => expect(isBracketsBalanced(seq)).toBeTruthy());

	// Check for unbalanced sequences
	[
		"[[]",
		"][",
		"[][][][][[]",
		"{)",
		"<]",
		"(}",
		"[{]}",
		"{<}>",
		"{{[(])}}",
		"{}()[]<",
		"{",
		"(",
		"[",
		"({}[]<>(((())))",
		"{{[]}}>",
	].forEach((seq) => expect(isBracketsBalanced(seq)).toBeFalsy());
});

test(`(30 pts) Testing toNaryString`, () => {
	[
		{ num: 1024, n: 2, expected: "10000000000" },
		{ num: 6561, n: 3, expected: "100000000" },
		{ num: 365, n: 2, expected: "101101101" },
		{ num: 365, n: 3, expected: "111112" },
		{ num: 365, n: 4, expected: "11231" },
		{ num: 365, n: 5, expected: "2430" },
		{ num: 365, n: 6, expected: "1405" },
		{ num: 365, n: 7, expected: "1031" },
		{ num: 365, n: 9, expected: "445" },
		{ num: 365, n: 10, expected: "365" },
	].forEach((data) => expect(toNaryString(data.num, data.n)).toEqual(data.expected));
});

test(`(40 pts) Testing timespanToHumanString`, () => {
	[
		{
			startDate: "2000-01-01 01:00:00.100",
			endDate: "2000-01-01 01:00:00.200",
			expected: "a few seconds ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 01:00:30.000",
			expected: "a few seconds ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 01:00:45.000",
			expected: "a few seconds ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 01:00:45.001",
			expected: "a minute ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 01:01:00.000",
			expected: "a minute ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 01:01:30.000",
			expected: "a minute ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 01:01:30.001",
			expected: "2 minutes ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 01:05:30.000",
			expected: "5 minutes ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 01:45:00.000",
			expected: "45 minutes ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 01:45:00.001",
			expected: "an hour ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 02:00:00.000",
			expected: "an hour ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 02:30:00.000",
			expected: "an hour ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 02:30:00.001",
			expected: "2 hours ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 05:30:00.000",
			expected: "4 hours ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 05:30:00.001",
			expected: "5 hours ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 23:00:00.000",
			expected: "22 hours ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-01 23:00:00.001",
			expected: "a day ago",
		},
		{
			startDate: "2000-01-01 01:00:00.000",
			endDate: "2000-01-02 01:00:00.000",
			expected: "a day ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-01-02 12:00:00.000",
			expected: "a day ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-01-02 12:00:00.001",
			expected: "2 days ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-01-05 12:00:00.000",
			expected: "4 days ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-01-26 00:00:00.000",
			expected: "25 days ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-01-26 00:00:00.001",
			expected: "a month ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-02-01 00:00:00.000",
			expected: "a month ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-02-15 00:00:00.000",
			expected: "a month ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-02-16 00:00:00.000",
			expected: "2 months ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-05-20 00:00:00.000",
			expected: "5 months ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-12-10 00:00:00.000",
			expected: "11 months ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2000-12-12 00:00:00.000",
			expected: "a year ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2001-02-15 00:00:00.001",
			expected: "a year ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2001-06-01 00:00:00.001",
			expected: "a year ago",
		},
		{
			startDate: "2000-01-01 00:00:00.000",
			endDate: "2015-02-15 00:00:00.001",
			expected: "15 years ago",
		},
	].forEach((data) =>
		expect(timespanToHumanString(new Date(data.startDate), new Date(data.endDate))).toEqual(
			data.expected
		)
	);
});
