/*RECURSION: 
Define a recursive function isEven corresponding to this description:
	Zero is even.
	One is odd.
	For any other number N, its evenness is the same as N - 2.
The function should accept a number parameter and return a Boolean.
*/
function isEven(num) {
	if (num < 0) {
		num = num * -1; 
	}
	if (num == 0) {
		return true;
	} else if (num == 1) {
		return false;
	} else {
		return isEven(num - 2);
	}
}

/*Calling isEven() on the numbers below, I would expect the following
results:
isEven(-44)	--> true
isEven(-1)	--> false
isEven(0)	--> true
isEven(1)	--> false 
isEven(50)	--> true
isEven(75)	--> false
*/
console.log(isEven(-44));
console.log(isEven(-1));
console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(50));
console.log(isEven(75));