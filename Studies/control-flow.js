/**
 * CONTROL FLOW:
 * 
 * 0: Control flow is the order in which the computer executes 
 * statements in a script. Code is ran in order from the first line 
 * in the file to the last line, 
 * unless the computer runs across the (extremely frequent) 
 * structures that change the control flow, 
 * such as conditionals and loops. 
 */

// 1. if statement //
/*
The if statements allow your program to make decisions 
about what to do next.
*/
let num = 42;
if (num > 0) {
  console.log("The number is a positive.");
};

// 2.  Else if //
/*
The else if statement allows you to 
add another condition to an if statement.*/

let number = 0;
if (number > 0) {
  console.log("The number is a positive.");
} else if (number < 0) {
  console.log("The number is a negative.");
} else {
  console.log("The number is a zero.");
};

// 3. Else //
/*
Else statement allows you to add a condition 
that will be executed if none of the previous 
conditions were true.*/

let name = '';
if ('') {
  console.log("Hello, " + '' + "!");
} else {
  console.log("Hello!");
};

// 4. Switch //
/*
The switch statement evaluates an expression, 
matching the expression's value against a series of case clauses, and 
executes statements after the first case clause with a matching value, 
until a break statement is encountered.*/

let grade = "A";
switch (grade) {
  case "A":
    console.log("You got an A! Great job!");
    break;
  case "B":
    console.log( "You got a B! Good job!");
    break;
  case "C":
    console.log("You got a C! Ok job!");
    break;
  case "D":
    console.log("You got a D! Bad job!");
    break;
  case "F":
    console.log("You got an F! Terrible job!");
    break;
  default:
    console.log("You got an F! Terrible job!");
};
