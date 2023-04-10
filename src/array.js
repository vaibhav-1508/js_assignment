/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
	const index = arr.indexOf(value);
	return index;
  }
  
  /**
   * Returns the doubled array - elements of the specified array are repeated twice
   * using original order
   *
   * @param {array} arr
   * @return {array}
   *
   * @example
   *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
   *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
   *    [] => []
   */
  function doubleArray(arr) {
	// const doubled = []; let c = 0;
	// for (let i = 0; i < arr.length; i++) {
	// 	doubled.push(arr[i]);
	// 	if(i == arr.length && c == 0) {
	// 		i=0;c=1;
	// 	}
	// }
	return arr.concat(arr);
  }
  
  /**
   * Returns an array of positive numbers from the specified array in original order
   *
   * @param {array} arr
   * @return {array}
   *
   * @example
   *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
   *    [-1, 2, -5, -4, 0] => [ 2 ]
   *    [] => []
   */
  function getArrayOfPositives(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] > 0) {
		  let x = arr[i];
		result.push(x);
	  }
	}
	return result;
	  // return arr.filter((num) => num > 0);
  }
  
  /**
   * Removes falsy values from the specified array
   * Falsy values: false, null, 0, "", undefined, and NaN.
   * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
   *
   * @param {array} arr
   * @return {array}
   *
   * @example
   *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
   *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
   *    [ false, 0, NaN, '', undefined ]   => [ ]
   */
  
  //Challenging
  function removeFalsyValues(arr) {
  return arr.filter(Boolean);
  }
  
  /**
   * Returns the array of string lengths from the specified string array.
   *
   * @param {array} arr
   * @return {array}
   *
   * @example
   *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
   *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
   */
  function getStringsLength(arr) {
	  let array = [];
	  for (let i = 0; i < arr.length; i++) {
		  array.push(arr[i].length);
	  }
	  return array;
  }
  
  /**
   * Returns the sum of all items in the specified array of numbers
   *
   * @param {array} arr
   * @return {number}
   *
   * @example
   *   [] => 0
   *   [ 1, 2, 3 ]           => 6
   *   [ -1, 1, -1, 1 ]      => 0
   *   [ 1, 10, 100, 1000 ]  => 1111
   */
  function getItemsSum(arr) {
	  let sum = 0;
	  for (let i = 0; i < arr.length; i++) {
		  sum += arr[i];
	  }
	  return sum;
  }
  
  module.exports = {
	findElement,
	doubleArray,
	getArrayOfPositives,
	removeFalsyValues,
	getStringsLength,
	getItemsSum,
  };
  