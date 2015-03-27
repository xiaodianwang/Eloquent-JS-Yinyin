/*THE SUM OF A RANGE: 
Write a range() function that takes two arguments, start and end, and returns an array
containing all the numbers from start up to (and including) end.
*/
function range(start, end) {
	var minNum = Math.min(start, end);
	var maxNum = Math.max(start, end);
	var rangeArr = [];
	for (minNum; minNum <= maxNum; minNum++) {
		if (start > end) {
			rangeArr.unshift(minNum);
		} else {
			rangeArr.push(minNum);
		}
	}
	return rangeArr;
}
/*Write a sum() function that takes an array of numbers and returns the sum of these
numbers. Run the program console.log(sum(range(1,10))) and see whether it does indeed
return 55.
*/
function sum(numArr) {
	if (arguments.length == 0) {
		return 0;
	} else {
		var total = 0;
		for(var i=0; i<numArr.length; i++) {
			total+=numArr[i];
		}
		return total;
	}
}

function sum(numArr) {
	if (arguments.length == 0) {
		return 0;
	} else {
		var total = 0;
		for (var num in numArr) {
			total += parseInt(num);
		}
		return total;
	}
}
//Calling the following function below, I would expect it to print 55.
console.log(sum(range(1,10)));

/*Modify your range() function to take an optional third argument that indicates the
"step" value used to build up the array. If no step is given, the array elements go 
up by increments of one, corresponding to the old behavior.
*/
//num1 < num2, step is (+) -> start = num1, end=num2
//num1 < num2, step is (-) -> start = num2, end=num1
//num1 > num2, step is (+) -> start = num2, end=num1
//num1 > num2, step is (-) -> start = num1, end=num2
function range(start, end, step) {
	var minNum = Math.min(start, end);
	var maxNum = Math.max(start, end);
	var allInRange = [];
	//build an array containing all integers within [start,end], with
	//increment of 1
	for(minNum; minNum <= maxNum; minNum++) {
		allInRange.push(minNum);
	}
	if (arguments.length < 3) {
		if (start > end) {
			step = -1;
		} else {
			step = 1;
		}
	}
	var startIndex = allInRange.indexOf(start);
	var rangeArr = [];
	while (startIndex > -1 && startIndex < allInRange.length) {
		rangeArr.push(allInRange[startIndex]);
		startIndex+=step;
	}
	return rangeArr;
}

//The function call range(1,10,2) should return [1, 3, 5, 7, 9]
//It should also work with negative step values so that range(5,2,-1) produces [5,4,3,2]
/*Note: This exercise seems to be assuming that when the range() function is called,
the sign of the step increment corresponds to the order of your start
and end numbers. 
*/
console.log(range(1,10,2));
console.log(range(5,2,-1));
