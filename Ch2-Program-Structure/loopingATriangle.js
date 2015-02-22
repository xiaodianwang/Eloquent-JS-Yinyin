/*LOOPING A TRIANGLE:
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

//First function created to print a triangle of any given size
function printTriangle1(maxSize) {
var outputString = "";
    for (var strLength=1; strLength<=maxSize; strLength++) {
        while (outputString.length < strLength) {
            outputString += "#";
        }
        console.log(outputString);
     }
}

//Second function created to print a triangle of any given size
//There is slight modification in the condtions of the for loop from printTriangle1(),
//to make use of the length property of a string.
function printTriangle2(maxSize) {
var outputString = "#";
    for (outputString; outputString.length <= maxSize; outputString+="#") {
        console.log(outputString);
    }
}

//Calling the above functions
printTriangle1(7);
printTriangle2(7);