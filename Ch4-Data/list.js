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

}

/*
Write a recursive version of nth().
*/
function nth(lst, num) {

}
