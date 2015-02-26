/*BEAN COUNTING:
Part 1: write a function countBs that takes a string as its only argument and returns a 
number that indicates how many uppercase “B” characters are in the string.
*/
function countBs(strng) {
	var index = 0;
	var bCount = 0;
	while (index < strng.length) {
		if (strng.charAt(index)toUpperCase() == 'B') {
			bCount++;
		}
			index++;
	}
	return bCount;
}

/*
Calling countBs on the following strings should return the results below:
countBs('The Brady Bunch') --> 3
countBs('boo hoo') --> 1
*/
console.log(countBs('The Brady Bunch'));
console.log(countBs('boo hoo'));

/*
Part 2: write a function called countChar that behaves like countBs, except it takes a second 
argument that indicates the character that is to be counted (rather than counting only uppercase “B” 
characters). Rewrite countBs to make use of this new function.
*/
function countChar(strng, chr) {
	var charCount = 0;
	for (var i=0; i<strng.length; i++) {
		if (strng.charAt(i).toUpperCase() == chr.toUpperCase()) {
			charCount++;
		}
	}
	return charCount;
}

/*
Rewritten version of countBs() that uses chountChar()
*/
function countBs2(strng) {
	return countChar(strng, 'B');
}

/*
Calling countChar on the following arguments should return the below results:
countChar('bring it on', 'O') --> 1
countChar('AHA', 'e') --> 0
countChar('ribBit', 'B') --> 2

Calling countBs2() on the following arguments should return the below results:
countBs2('bBbB bbb') --> 7
countBs2('Long time no see') --> 0
*/
console.log(countChar('bring it on', 'O'));
console.log(countChar('AHA', 'e') );
console.log(countChar('ribBit', 'B'));

console.log(countBs2('bBbB bbb'));
console.log(countBs2('Long time no see'));

