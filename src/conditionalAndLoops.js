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
function getFizzBuzz(n) {
	// throw new Error("Not implemented");
	let s = "";
	if( n % 3 == 0) s += "Fizz";
	if (n%5 == 0) s += "Buzz";
	if ((n%3)*(n%5)) s = n;
	return s;
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
	// throw new Error("Not implemented");
	return n ? (n * getFactorial(n - 1)) : 1;
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
	// throw new Error("Not implemented");
	let s = 0;
	for (let i = n1; i <= n2; i++) {s += i;}
	return s;
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
	// throw new Error("Not implemented");
	return ((a > 0 && b > 0 && c > 0) && (a+b-c) > 0 && (b+c-a) > 0 && (c+a-b) > 0)
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
	// throw new Error("Not implemented");
	let s = ""
	let n = str.length
	for (let i = 0; i < n; i++) {
		s += str[n - 1 - i];
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
 *   '{[(<{[]}>)]}' = trueelement
 */
function isBracketsBalanced(str) {
	// throw new Error("Not implemented");
	let stck = [];
	const open = "[({<";
	const close = "])}>";
	for (const c of str) {
		if (open.includes(c)) { stck.push(c); }
		if (close.includes(c)) {if (stck.length == 0) return false; if ( open[close.indexOf(c)] != stck.pop()) return false ;} 
	}
	if (stck.length) return false;
	return true; 
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
function round_down_if_halfway(diff){
	if ((diff - (diff >> 0)) <= 0.5){ return (diff >> 0);}
	else {return (diff >> 0) + 1;}
}

function timespanToHumanString(startDate, endDate) {
	//throw new Error("Not implemented");
	const diff_mill = endDate.getTime() - startDate.getTime() ;
	const secs = diff_mill / 1000;
	const minutes = secs / 60;
	const hours = minutes / 60;
	const days = hours / 24;
	const months = days / 30;
	const years = days / 365 ; 
	let s = "";
	if (secs <= 45){s = "a few seconds ago";}
	else if (secs <= 90) {s = "a minute ago";}
	else if (minutes <= 45) {s = `${ round_down_if_halfway(minutes  )} minutes ago`;}
	else if (minutes <= 90) {s = "an hour ago";}
	else if (hours <= 22) {s = `${round_down_if_halfway(hours)} hours ago`;}
	else if (hours <= 36) { s = "a day ago";}
	else if (days <= 25) { s = `${round_down_if_halfway(days)} days ago`;}
	else if (days <= 45) { s = "a month ago";}
	else if (days <= 345) {s = `${round_down_if_halfway(months)} months ago`;}
	else if (days <= 545) {s = "a year ago";}
	else {s = `${round_down_if_halfway(years)} years ago`;}
	return s;
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
function toNaryString(num, n) {
	// throw new Error("Not implemented");
	let s = [];
	let t =  0;		
	while (num) {
		t = num % n;
		s.unshift(t);
		num = ((num/n) >> 0); 
	}
//	return s.reduce((join,i)=>join + i);
	return s.join('');
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
