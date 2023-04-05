const {
	getRectangleArea,
	getAverage,
	getLinearEquationRoot,
	getLastDigit,
	parseNumberFromString,
	isPrime,
} = require("../src/numbers");

test(`(3 pts) Testing getRectangleArea`, () => {
	expect(getRectangleArea(5, 10)).toEqual(50);
	expect(getRectangleArea(5, 5)).toEqual(25);
	expect(getRectangleArea(5, 0)).toEqual(0);
});

test(`(3 pts) Testing getAverage`, () => {
	expect(getRectangleArea(5, 5)).toEqual(5);
	expect(getRectangleArea(10, 0)).toEqual(5);
	expect(getRectangleArea(-5, 5)).toEqual(0);
	expect(getRectangleArea(6, 5)).toEqual(5.5);
	expect(getAverage(Number.MAX_VALUE - 2, Number.MAX_VALUE)).toEqual(Number.MAX_VALUE - 1);
});

test(`(3 pts) Testing getLinearEquationRoot`, () => {
	expect(getLinearEquationRoot(5, -10)).toEqual(2);
	expect(getLinearEquationRoot(1, 8)).toEqual(-8);
	expect(getLinearEquationRoot(5, 0)).toEqual(0);
});

test(`(2 pts) Testing getLastDigit`, () => {
	expect(getLastDigit(100)).toEqual(0);
	expect(getLastDigit(37)).toEqual(7);
	expect(getLastDigit(5)).toEqual(5);
	expect(getLastDigit(0)).toEqual(0);
	expect(getLastDigit(-19)).toEqual(9);
});

test(`(2 pts) Testing parseNumberFromString`, () => {
	expect(parseNumberFromString("100")).toEqual(100);
	expect(parseNumberFromString("37")).toEqual(37);
	expect(parseNumberFromString("-525.25")).toEqual(-525.25);
});

test(`(10 pts) Testing isPrime`, () => {
	expect(isPrime(1)).toBeFalsy();
	expect(isPrime(4)).toBeFalsy();
	expect(isPrime(6)).toBeFalsy();
	expect(isPrime(8)).toBeFalsy();
	expect(isPrime(9)).toBeFalsy();
	expect(isPrime(10)).toBeFalsy();
	expect(isPrime(12)).toBeFalsy();
	expect(isPrime(119)).toBeFalsy();

	expect(isPrime(2)).toBeTruthy();
	expect(isPrime(3)).toBeTruthy();
	expect(isPrime(5)).toBeTruthy();
	expect(isPrime(7)).toBeTruthy();
	expect(isPrime(11)).toBeTruthy();
	expect(isPrime(13)).toBeTruthy();
	expect(isPrime(113)).toBeTruthy();
});
