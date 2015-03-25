/*A LIST:
Write a function arrayToList() that builds up a data structure
like the list below:
	var list = {
	  value: 1,
	  rest: {
	    value: 2,
	    rest: {
	      value: 3,
	      rest: null
	    }
	  }
	};
	*/
	function arrayToList(arr) {
		if (arr) {
			var outputList = {};
			for (var i=arr.length-1; i > -1; i--) {
				if (i==arr.length-1) {
					outputList = prepend(arr[i], null);
				} else {
					outputList = prepend(arr[i], outputList);
				}
			}
			return outputList;
		} else {
			return {};
		}
	}

/*
Write a listToArray() function that produces an array from a list.
*/
function listToArray(lst) {
	if (lst) {
		var outputArr = [];
		while (lst) {
			outputArr.push(lst.value);
			lst = lst.rest;
		}
		return outputArr;
	} else {
		return [];
	}
}

/*
Also write the helper functions prepend(), which takes an element and
a list and creates a new list that adds the element to the front of the input
list.
*/
function prepend(elemt, lst) {
	var newList = {
		value: elemt,
		rest: lst
	};
	return newList;
}

/*
Write the helper function nth(), which takes a list and a number and returns
the element at the given position in the list, or undefined when there is no 
such element.
*/
//Assuming that lists are indexed starting from 0
function nth(lst, num) {
	if (arguments.length == 2) {
		for (num; num>=0; num--) {
			if(!lst) {
				return undefined;
			} else if(num==0) {
				return lst.value;
			} else {
				lst = lst.rest;
			}
		}
		return lst;
	} else {
		return undefined;
	}
}

/*
Write a recursive version of nth().
*/
function nthRecursive(lst, num) {
	debugger
	if (!lst || num == undefined) {
		return undefined;
	} else if (num==0) {
		return lst.value;
	} else {
		return nth(lst.rest, num-1);
	}
}

/*
Testing the functions above:
*/
var arr = [1,3,5,7,9];

/*
calling arrayToList(arr) should return a list like below:
	{value: 1, 
		rest: {
			value: 3, 
			rest: {
				value: 5,
				rest: {
					value: 7,
					rest: {
						value: 9,
						rest: null
					}
				}
			}
		}}
*/
var lst = arrayToList(arr);

var backToOldArray = listToArray(lst); //should return the original array:[1,3,5,7,9]
lst = prepend(0, lst);
var fourthElement = nth(lst, 3); //should return 5
var fourthElementRecursive = nthRecursive(lst, 3); //should return 5
var firstElement = nth(lst, 0); //should return 0
var firstElementRecursive = nthRecursive(lst, 0); //should return 0
var outOfBounds = nth(lst, 10); //should return undefined
var outOfBoundsRecursive = nth(lst, 10); //should return undefined
var empty = nth(0); //should return undefined
var emptyRecursive = nth(0) //should return undefined


