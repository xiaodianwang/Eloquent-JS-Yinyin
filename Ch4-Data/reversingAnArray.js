/*REVERSING AN ARRAY: 
Write a function reverseArray(), that takes an array as an argument
and produces a new array that has the same elements in the inverse order.
This may not use the standard reverse() method.
*/
function reverseArray(arr) {
	var reverseArr = [];
	if (arguments.length >= 1) {
		for (var i=0; i<arr.length; i++) {
			reverseArr.unshift(arr[i]);
		}	
	}
	return reverseArr;
}

/*
Write a function reverseArrayInPlace(), that does what the reverseArray()
method does: it modifies the array given as argument in order to reverse
its elements.
*/
function reverseArrayInPlace(arr) {
	if (arr && arr.length > 0) {
		var startInd = 0;
		var endInd = arr.length - 1;
		while (startInd < endInd) {
			var el1 = arr[startInd];
			var el2 = arr[endInd];
			arr[startInd] = el2;
			arr[endInd] = el1;
			startInd++;
			endInd--;
		}
		return arr;
	} else {
		return [];
	}
}

/*
Calling reverseArrayInPlace() on the following arguments below, I would
expect the following results:
*/
console.log(reverseArrayInPlace()); //should print "[]"
console.log(reverseArrayInPlace([]); //should print "[]"
console.log(reverseArrayInPlace([1])); //should print "[1]"
console.log(reverseArrayInPlace(["a", 1.23, 4, 5])) //should print "[5, 4, 1.23, "a"]"
