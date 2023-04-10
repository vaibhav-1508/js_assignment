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
	if(num%5==0 && num%3==0)
	return "FizzBuzz"
	if(num%5==0)
	return "Buzz"
	if(num%3==0)
	return "Fizz"
	return num

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
	let f=1;
	while(n>0)
	f*=n--
	return f
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
	let sum=0,start=n1;
	while(start<=n2)
	{
		sum+=start;
		start++;
	}
	return sum
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
	return (a+b>c && b+c>a && c+a>b);
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
	let out=""
	for(let i=str.length-1;i>=0;i--)
	{
		out+=str.charAt(i)
	}
	return out
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
function isBracketsBalanced(str) {
	let stack=[];
	let bracsOpen="{[(<";
	let bracsClos="}])>"
	let closerOf=function(m)
	{
		return bracsClos.charAt(bracsOpen.indexOf(m))
	}
	for(let i=0;i<str.length;i++)
	{
		let c=str.charAt(i);
		if(bracsOpen.includes(c))
		{
			stack.push(c);
		}
		else
		{
			let k=stack.pop();
			let clo=closerOf(k);
			if(c!=clo)
			return false
		}
	}
	return(stack.length==0)

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
	let interval=(endDate.valueOf()-startDate.valueOf())*0.001
	console.log(interval)

	if(interval>0 && interval <=45)
	return "a few seconds ago"


	if(interval>45 && interval<=90)
	return "a minute ago"
	if(interval>90 && interval<=(45*60))
	return `${Math.floor(Math.ceil(interval/30)/2)} minutes ago`


	
	if(interval>45*60  && interval <=90*60)
	return "an hour ago"
	if(interval>90*60 && interval<=(22*60*60))
	{
		let halfhrs=interval/1800
		//console.log(Math.ceil(halfhrs))
		return `${Math.floor(Math.ceil(halfhrs)/2)} hours ago`
	}
	if(interval>22*60*60 && interval<= 36*60*60)
	{
		return "a day ago"
	}
	if(interval>36*60*60 &&  interval<=25*24*60*60)
	{
		let halfdays=interval/(12*60*60);
		console.log(halfdays)
		return `${Math.floor(Math.ceil(halfdays)/2)} days ago`
	}
	if(interval>25*24*60*60 && interval<=45*24*60*60)
	{
		return "a month ago"
	}
	if(interval>45*24*60*60 && interval<=345*24*60*60)
	{
		let halfmonths=interval/(15*24*60*60);
		console.log(halfmonths)
		return `${Math.floor(Math.ceil(halfmonths)/2)} months ago`
	}
	if(interval>345*24*60*60 && interval<=545*24*60*60)
	{
		return "a year ago"
	}
	if(interval>545*24*60*60)
	{
		let yrs=Math.ceil(Math.floor(interval/(365*24*60*60)))
		return `${yrs} years ago`
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
function toNaryString(num, n) {
	return ""+DecToBASE(num,n)
}

function DecToBASE(n,BASE)
{
	if(n==0)
	return "";
	else
	{
		return DecToBASE(Math.floor(n/BASE),BASE)+""+fathom(n%BASE);
	}
}
function fathom(num)
{
	if(num<10)
	return num;
	else
	return String.fromCharCode(55+num);
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
