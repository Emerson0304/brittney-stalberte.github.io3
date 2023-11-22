/**
 * OPERATORS:
 * 
 * 0: Operators are used to perform operations on operands.
 * There are different types of operators in javascript.
 * There are arithmetic operators, assignment operators, 
 * comparison operators, logical operators,
 * unary operators, and ternary operators.
 */

// 1. Assignment operators //
  
/* Assignment operators assigns a value 
to its left operand based on the value of its right operand. 
The standard assignment operators 
are equality (=), addition assignment (+=), 
subtraction assignment (-=), multiplication assignment (*=), 
and division assignment (/=).*/

let c = 6;
let d = 4;
console.log("c = d", c = d);// 4
console.log("c += d", c += d);// 8
console.log("c -= d", c -= d);// 4
console.log("c *= d", c *= d);// 24
console.log("c /= d", c /= d);// 2

// 2. Arithmetic operators //
  
/*An arithmetic operator takes numerical values as their operands 
and returns a single numerical value. 
The standard arithmetic operators are addition (+), subtraction (-), 
multiplication (*), and division (/).*/

let a = 30;
let b = 28;
console.log("a + b = ", a + b);// 58
console.log("a - b = ", a - b);// 2
console.log("a * b = ", a * b);// 840
console.log("a / b = ", a / b);// 2

//show an example of the exponentiation operator.
let x = 2 ** 3;
console.log(x);// 8

let y = 2 ** 3 ** 2;
console.log(y);// 512

// 3. Logical operators //
  
/* Are typically used with Boolean (logical) values; 
when they are, they return a Boolean value. However, the && and || operators 
actually return the value of one of the specified operands, 
so if these operators are used with non-Boolean values, 
they may return a non-Boolean value.*/

// What does logical operators mean ?
/*Logical operators are used to 
combine two or more expressions 
into a single expression.*/

// && // The AND Operator will return true if both expressions resolve to true

  // Example of AND Operator:

  console.log(18 > 1 && 2 < 22);// true
  console.log(5 > 2 && 5 > 20);// false

  // || // The OR Operator will return true if either expression resolves to true

// Example of OR Operator:
  console.log(35 > 5 || 25 < 5);// true
  console.log(5 < 1 || 1 > 80);// false

  // ! // The NOT Operator will return true if the expression resolves to false

    // Example of NOT Operator:
  console.log(!(10 > 1));// false
  console.log(!(3 < 1));// true



// 4. Comparison operators //
  
/*A comparison operator compares its operands and returns 
a logical value based on whether the comparison is true. 
The operands can be numerical, string, logical, 
or object values. The standard comparison operators are 
strict equality (===), equal (==), not equal (!==), 
greater than (>), greater than or equal (>=), less than (<), 
less than or equal (<=), and strict inequality (!==).*/

let e = 6;
let f = 6;
console.log("e == f", e == f);// true
console.log("e === f", e === f);// true
console.log("e != f", e != f);// false
console.log("e !== f", e !== f);// false
console.log("e > f", e > f);// false
console.log("e >= f", e >= f);// true
console.log("e < f", e < f);// true
console.log("e <= f", e <= f);// true

// 6. Unary operators //

/* Is an operation with only one operand. 
The standard unary operators are negation (-), 
increment (++), and decrement (--).*/

let i = 6;
console.log("-i", -i);// -6
console.log("++i", ++i);// 7
console.log("--i", --i);// 6

// 7. ternary operator //
/*
The ternary operator is a conditional oprator that takes three operands:
 a condition followed by a question mark (?), then 
 an expression to execute if the condition is truthy 
 followed by a colon (:), and 
 finally the expression to execute if the condition is falsy. 
 This operator is frequently used as a shortcut for the if statement.
*/
let j = 10;
let k = 7;
console.log("j > k ? j : k", j > k ? j : k);// 10
console.log("j < k ? j : k", j < k ? j : k);// 7
