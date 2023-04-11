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
	if (num % 3 === 0 && num % 5 === 0) {
	  return "FizzBuzz";
	} else if (num % 3 === 0) {
	  return "Fizz";
	} else if (num % 5 === 0) {
	  return "Buzz";
	} else {
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
	let result = 1;
	for (let i = 1; i <= n; i++) {
	  result *= i;
	}
	return result;
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
	let result = 0;
	for (let i = n1; i <= n2; i++) {
	  result += i;
	}
	return result;
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
	if (a + b > c && b + c > a && c + a > b) {
	  return true;
	}
	return false;
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
	return str.split("").reverse().join("");
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
  // Super Duper Hard.
  function isBracketsBalanced(str) {
	const stack = [];
	const pairs = {
	  "(": ")",
	  "[": "]",
	  "{": "}",
	  "<": ">",
	};
	for (let i = 0; i < str.length; i++) {
	  if (pairs[str[i]]) {
		stack.push(str[i]);
	  } else if (
		str[i] === ")" ||
		str[i] === "]" ||
		str[i] === "}" ||
		str[i] === ">"
	  ) {
		const last = stack.pop();
		if (pairs[last] !== str[i]) {
		  return false;
		}
	  }
	}
	return stack.length === 0;
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
	  const oneSecond = 1000;
	  const oneMinute = oneSecond * 60;
	  const oneHour = oneMinute * 60;
	  const oneDay = oneHour * 24;
	  const oneMonth = oneDay * 30;
	  const oneYear = oneDay * 365;
	
	  const timeDiff = endDate.getTime() - startDate.getTime();
	
	  if (timeDiff <= 45 * oneSecond) {
		return "a few seconds ago";
	  }
	
	  if (timeDiff <= 90 * oneSecond) {
		return "a minute ago";
	  }
	
	  if (timeDiff <= 45 * oneMinute) {
		const minutes = Math.round((timeDiff - 1) / oneMinute);
		return `${minutes} minutes ago`;
	  }
	
	  if (timeDiff <= 90 * oneMinute) {
		return "an hour ago";
	  }
	
	  if (timeDiff <= 22 * oneHour) {
		const hours = Math.round((timeDiff - 1) / oneHour);
		return `${hours} hours ago`;
	  }
	
	  if (timeDiff <= 36 * oneHour) {
		return "a day ago";
	  }
	
	  if (timeDiff <= 25 * oneDay) {
		const days = Math.round((timeDiff - 1) / oneDay);
		return `${days} days ago`;
	  }
	
	  if (timeDiff <= 45 * oneDay) {
		return "a month ago";
	  }
	
	  if (timeDiff <= 345 * oneDay) {
		const months = Math.round((timeDiff - 1) / oneMonth);
		return `${months} months ago`;
	  }
	
	  if (timeDiff <= 545 * oneDay) {
		return "a year ago";
	  }
	
	  const years = Math.round((timeDiff - 1) / oneYear);
	  return `${years} years ago`;
	}
	
  //Super Super Super Hard
  // function timespanToHumanString(startTime, endTime) {
  //   const differenceInSeconds = Math.floor((endTime - startTime) / 1000);
  //   const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  //   const differenceInHours = Math.floor(differenceInMinutes / 60);
  //   const differenceInDays = Math.floor(differenceInHours / 24);
  //   const differenceInMonths = Math.floor(differenceInDays / 30);
  //   const differenceInYears = Math.floor(differenceInMonths / 12);
  
  //   if (differenceInSeconds == 45) {
  //     return "a few seconds ago";
  //   } else if (differenceInSeconds > 45 && differenceInSeconds <= 90) {
  //     return "a minute ago";
  //   } else if (Math.ceil(differenceInSeconds) <= 45) {
  //     return "a few seconds ago";
  //   } else if (differenceInSeconds > 90 && differenceInSeconds <= 120) {
  //     return `2 minutes ago`;
  //   } else if (differenceInMinutes <= 45) {
  //     return `${Math.floor(differenceInMinutes)} minutes ago`;
  //   } else if (differenceInMinutes >= 45 && differenceInMinutes <= 90) {
  //     return "an hour ago";
  //   } else if (differenceInHours <= 22) {
  //     return `${Math.ceil(differenceInMinutes) / 60} hours ago`;
  //   } else if (differenceInHours > 22 && differenceInHours <= 24) {
  //     return "a day ago";
  //   } else if (differenceInDays <= 25) {
  //     return `${Math.ceil(differenceInDays)} days ago`;
  //   } else if (differenceInDays > 25 && differenceInDays <= 45) {
  //     return "a month ago";
  //   } else if (differenceInDays >= 45 && differenceInDays <= 345) {
  //     return `${Math.ceil(differenceInDays / 30)} months ago`;
  //   } else if (differenceInDays >= 345 && differenceInDays <= 545) {
  //     return "a year ago";
  //   } else {
  //     return `${Math.ceil(differenceInDays / 30)} years ago`;
  //   }
  // }
  
  
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
	if (n < 2 || n > 10) {
	  throw new Error("Radix must be between 2 and 10");
	}
	if (num === 0) {
	  return "0";
	}
	let result = "";
	while (num > 0) {
	  result = (num % n) + result;
	  num = Math.floor(num / n);
	}
	return result;
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
  