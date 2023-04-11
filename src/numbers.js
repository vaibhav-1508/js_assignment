/**
 * Returns an area of a rectangle given by width and heigth.
 *
 * @param {numder} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
	return width*height;
}

/**
 * Returns an average of two given numbers.
 *
 * @param {number} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
	if(value1+value2>Number.MAX_VALUE)
	{
		return Number.MAX_VALUE+((value1-Number.MAX_VALUE)+(value2-Number.MAX_VALUE))/2
	}
	else
	return (value1+value2)/2;
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
	let ans=-b/a;
	if(ans==-0)
	return 0;
	else
	return ans;
}

/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
	return Math.abs(value)%10;
}

/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
	return parseFloat(value)
}

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
	if(n==1)
	return false;
	for(let i=2;i<n;i++)
	{
		if(n%i==0)
		{
			return false;
		}
	}
	return true;
}

module.exports = {
	getRectangleArea,
	getAverage,
	getLinearEquationRoot,
	getLastDigit,
	parseNumberFromString,
	isPrime,
};
