const {
	findElement,
	doubleArray,
	getArrayOfPositives,
	removeFalsyValues,
	getStringsLength,
	getItemsSum,
} = require("../src/array");

describe(`Arrays`, () => {
	test(`(5 pts) Testing findElement`, () => {
		expect(findElement(["Ace", 10, true], 10)).toEqual(1);
		expect(findElement(["Array", "Number", "string"], "Date")).toEqual(-1);
		expect(findElement([0, 1, 2, 3, 4, 5], 5)).toEqual(5);
	});

	test(`(2 pts) Testing doubleArray`, () => {
		expect(doubleArray(["Ace", 10, true])).toEqual(["Ace", 10, true, "Ace", 10, true]);
		expect(doubleArray([0, 1, 2, 3, 4, 5])).toEqual([0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]);
		expect(doubleArray([])).toEqual([]);
	});

	test(`(4 pts) Testing getArrayOfPositives`, () => {
		expect(getArrayOfPositives([0, 1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
		expect(getArrayOfPositives([])).toEqual([]);
	});

	test(`(3 pts) Testing removeFalsyValues`, () => {
		expect(removeFalsyValues([0, false, "cat", NaN, true, ""])).toEqual(["cat", true]);
		expect(removeFalsyValues([1, 2, 3, 4, 5, "false"])).toEqual([1, 2, 3, 4, 5, "false"]);
		expect(removeFalsyValues([false, 0, NaN, "", undefined])).toEqual([]);
	});

	test(`(3 pts) Testing getStringsLength`, () => {
		expect(getStringsLength(["", "a", "bc", "def", "ghij"])).toEqual([0, 1, 2, 3, 4]);
		expect(getStringsLength(["angular", "react", "ember"])).toEqual([7, 5, 5]);
	});

	test(`(3 pts) Testing getItemsSum`, () => {
		expect(getItemsSum([])).toEqual(0);
		expect(getItemsSum([1, 2, 3])).toEqual(6);
		expect(getItemsSum([-1, 1, -1, 1])).toEqual(0);
		expect(getItemsSum([1, 10, 100, 1000])).toEqual(1111);
	});
});
