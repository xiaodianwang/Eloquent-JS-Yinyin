/*MINIMUM:
Write a function min that takes two arguments and returns their minimum.
*/
function min(num1, num2) {
	return num1 <= num2 ? num1 : num2;
}
/*Calling min() on the arguments below should return the following results:
min(0,10)	--> 0
min(0, -10)	--> -10
min(5,5)	--> 5
*/
console.log(min(0,10));
console.log(min(0,-10));
console.log(min(5,5));