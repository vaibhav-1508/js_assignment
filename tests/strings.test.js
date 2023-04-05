const {
	concatenateStrings,
	getStringLength,
	getFirstChar,
	removeLeadingAndTrailingWhitespaces,
	repeatString,
	removeFirstOccurrences,
	convertToUpperCase,
	encodeToRot13,
} = require("../src/strings");

test(`Testing concatenateStrings`, () => {
	expect(concatenateStrings("aa", "bb")).toEqual("aabb");
	expect(concatenateStrings("aa", "")).toEqual("aa");
	expect(concatenateStrings("", "bb")).toEqual("bb");
});

test(`Testing getStringLength`, () => {
	expect(getStringLength("aaaaa")).toEqual(5);
	expect(getStringLength("a")).toEqual(1);
	expect(getStringLength("")).toEqual(0);
});

test(`Testing getFirstChar`, () => {
	expect(getFirstChar("aaaaa")).toEqual("a");
	expect(getFirstChar("John Doe")).toEqual("J");
	expect(getFirstChar("-test")).toEqual("-");
});

test(`Testing removeLeadingAndTrailingWhitespace`, () => {
	expect(removeLeadingAndTrailingWhitespaces("  Abracadabra")).toEqual("Abracadabra");
	expect(removeLeadingAndTrailingWhitespaces("cat")).toEqual("cat");
	expect(removeLeadingAndTrailingWhitespaces("\tHello, World! ")).toEqual("Hello, World!");
});

test(`Testing repeatString`, () => {
	expect(repeatString("A", 5)).toEqual("AAAAA");
	expect(repeatString("cat", 3)).toEqual("catcatcat");
});

test(`Testing removeFirstOccurrences`, () => {
	expect(removeFirstOccurrences("To be or not to be", " not")).toEqual("To be or to be");
	expect(removeFirstOccurrences("I like legends", "end")).toEqual("I like legs");
	expect(removeFirstOccurrences("ABABAB", "BA")).toEqual("ABAB");
});

test(`Testing convertToUpperCase`, () => {
	expect(convertToUpperCase("Thunderstruck")).toEqual("THUNDERSTRUCK");
	expect(convertToUpperCase("abcdefghijklmnopqrstuvwxyz")).toEqual("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
});

test(`Testing encodeToRot13`, () => {
	expect(encodeToRot13("hello")).toEqual("uryyb");
	expect(encodeToRot13("Why did the chicken cross the road?")).toEqual(
		"Jul qvq gur puvpxra pebff gur ebnq?"
	);
	expect(encodeToRot13("Gb trg gb gur bgure fvqr!")).toEqual("To get to the other side!");
});
