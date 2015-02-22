/*CHESS BOARD:
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

/*
Approach: I have an A x A board. A can either be an even or odd integer.
White is represented by ' '
Black is represented by '#'
*/
function chessBoard(dimension) {
    var extraColumn = dimension+1; //extra column holds the newline characters at the end of each line
    var totalSquares = dimension*extraColumn;
    var board = '';
    for (var square=1; square<=totalSquares; square++) {
        if (square%2 == 0 && square%extraColumn != 0) {
            board+='#';
        } else {
            board+=' ';
        }
        if (square%extraColumn == 0) {
            board+='\n';
        } 
    }
    console.log(board);
}

chessBoard(8);