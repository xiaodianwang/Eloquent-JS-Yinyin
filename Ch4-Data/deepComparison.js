/*DEEP COMPARISON:
Write a function deepEqual(), that takes two values and returns true
only if they are the same value or are objects with the same properties whose
values are also equal when compared with a recursive call to deepEqual().
*/
function deepEqual(obj1, obj2) {
	if (obj1 === null && obj2 === null) {
		return true;
	} if (typeof obj1 != 'object' || typeof obj2 != 'object') {
		return obj1 === obj2;
	} else {
		for (var prop in obj1) {
			if (obj1[prop] != obj2[prop]) {
				return false;
			}
		}
		return true;
	}
}

//Testing deepEqual():
console.log(deepEqual(null, null)); //should print true
console.log(deepEqual(null)); //should print false
console.log(deepEqual(undefined, null)); //should print false
console.log(deepEqual(1, 1)); //should print true
console.log(deepEqual('hello', 'hello')); //should print true
console.log(deepEqual('hello', 'Hello')); //should print false

var person1 = {
	name: 'Yinyin',
	food: 'Chocolate'
};
var person2 = person1;
var person3 = {
	name: 'Yinyin',
	food: 'carrots'
};
var person4 = {};

console.log(deepEqual(person1, person2)); //should print true
console.log(deepEqual(person1, person3)); //should print false
console.log(deepEqual(person1, person4)); //should print false