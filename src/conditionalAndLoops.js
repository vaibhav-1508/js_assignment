/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
	if (num % 15 == 0) {
		return "FizzBuzz";
	}
	else if (num % 3 == 0) {
		return "Fizz";
	}
	else if (num % 5 == 0) {
		return "Buzz";
	}
	else {
		return num;
	}
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
	let f = 1;
	for (let i = 1; i <= n; i++) {
		f *= i;
	}
	return f;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
	let sum = 0;
	for (let i = n1; i <= n2; i++) {
		sum += i;
	}
	return sum;
}

/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false
 * in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
	return (a + b > c && b + c > a && a + c > b);
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
	let s = "";
	for (let i = str.length - 1; i >= 0; i--) {
		s += str[i];
	}
	return s;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */

let mapping = {
	']': '[',
	'}': '{',
	')': '(',
	'>': '<'
}
let closed = ["]", "}", ")", ">"];
let open = ["[", "{", "(", "<"];
function isBracketsBalanced(str) {
	let n = str.length;
	if (str == "") {
		return true;
	}
	let stck = [];
	for (let i = 0; i < n; i++) {
		if (open.includes(str[i])) {
			stck.push(str[i]);
		}
		if (closed.includes(str[i])) {
			if (stck[stck.length - 1] == mapping[str[i]]) {
				stck = stck.slice(0, stck.length - 1);
				continue;
			}
			else {
				return false;
			}
		}
	}
	if (stck.length == 0) {
		return true;
	}
	return false;
}




/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */

function timespanToHumanString(startDate, endDate) {
	let date1 = startDate;
	let date2 = endDate;
	let sec1 = date1.valueOf();
	let sec2 = date2.valueOf();
	let secGap = (sec2 - sec1) / 1000;
	let minGap = secGap / 60;
	let hrGap = minGap / 60;
	let dayGap = hrGap / 24;
	let monthGap = dayGap / 30;
	let yrGap = monthGap / 12;
	if (secGap <= 45) {
		return "a few seconds ago";
	}
	else if (secGap <= 90) {
		return "a minute ago";
	}
	else if (minGap <= 45) {
		let x = Math.round(minGap);
		if (x - minGap != 0.5) {
			return `${x} minutes ago`;
		}
		else {
			return `${x-1} minutes ago`
		}
	}
	else if (minGap <= 90) {
		return "an hour ago";
	}
	else if (hrGap <= 22) {
		let x = Math.round(hrGap);
		if (x - hrGap != 0.5) {
			return `${x} hours ago`;
		}
		else {
			return `${x-1} hours ago`
		}
	}
	else if (hrGap <= 36) {
		return "a day ago";
	}
	else if (dayGap <= 25) {
		let x = Math.round(dayGap);
		if (x - dayGap != 0.5) {
			return `${x} days ago`;
		}
		else {
			return `${x-1} days ago`
		}
	}
	else if (dayGap <= 45) {
		return "a month ago";
	}
	else if (dayGap <= 345) {
		let x = Math.round(monthGap);
		if (x - monthGap != 0.5) {
			return `${x} months ago`;
		}
		else {
			return `${x-1} months ago`
		}
	}
	else if (dayGap <= 545) {
		return "a year ago";
	}
	else {
		let x = Math.round(yrGap);
		if (x - yrGap != 0.5) {
			return `${x} years ago`;
		}
		else {
			return `${x-1} years ago`
		}
	}
}
/**
 * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
 * specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
let str = "";
let converter = {
	10: "a",
	11: "b",
	12: "c",
	13: "d",
	14: "e",
	15: "f"
}
function generate(num, n) {
	if (num < n) {
		str += num;
		return;
	}
	generate(Math.floor(num / n), n);
	if (num % n < 10) {
		str += (num % n);
	}
	else {
		str += (converter[num % n]);
	}
}
function toNaryString(num, n) {
	str = "";
	generate(num, n, str);
	return str;
}


module.exports = {
	getFizzBuzz,
	getFactorial,
	getSumBetweenNumbers,
	isTriangle,
	reverseString,
	isBracketsBalanced,
	timespanToHumanString,
	toNaryString,
};
