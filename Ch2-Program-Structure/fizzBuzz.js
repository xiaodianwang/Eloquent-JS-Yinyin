/*FIZZBUZZ PART 1:
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
function fizzBuzz1(startNum, endNum) {
    for (var i=startNum; i<=endNum; i++) {
        if (i%3 == 0) {
            console.log("Fizz");
        } else if (i%5 == 0 && i%3 !=0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

/*Execution of fizzBuzz1() with the domain [1,15] should print the following:
1
2
3-->Fizz
4
5-->Buzz
6-->Fizz
7
8
9-->Fizz
10-->Buzz
11
12-->Fizz
13
14
15-->Fizz
*/
fizzBuzz1(1,15);

/*FIZZBUZZ PART 2:
When you have Part 1 working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
function fizzBuzz2A(startNum, endNum) {
    for(var i=startNum; i<=endNum; i++) {
        if (i%3 == 0 && i%5 == 0) {
            console.log("FizzBuzz");
        } else if (i%3 == 0) {
            console.log("Fizz");
        } else if (i%5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

//Approach of fizzBuzz2B() is to build the output string containing the word or words to output
function fizzBuzz2B(startNum, endNum) {
    for (startNum; startNum <= endNum; startNum++) {
        var outputString="";
        if (startNum%3 == 0) {
            outputString+="Fizz";
        } 
        if (startNum%5 == 0) {
            outputString+="Buzz";
        }
        console.log(outputString || startNum);
    }
}

/*Executing either fizzBuzz2A() or fizzBuzz2B() with the domain of [1,21] should print this result:
1
2
3-->Fizz
4
5-->Buzz
6-->Fizz
7
8
9-->Fizz
10-->Buzz
11
12-->Fizz
13
14
15-->FizzBuzz
16
17
18-->Fizz
19
20-->Buzz
21--Fizz
*/
fizzBuzz2A(1,21);
fizzBuzz2B(1,21);