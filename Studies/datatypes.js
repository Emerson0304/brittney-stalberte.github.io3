/**
 * DATATYPES: 
 * 
 * 0: Data Types are Number, String, Boolean, Null, Undefined. 
 * A value is always a certain type of data.
 * In javaScript theres a built-in keyword called typeof() which is used 
 * to identify the type of a variables. 
 * 
 */

// 1. number //
/*
 Number is a data type that represents a number. 
 Number is a property of the global object.
*/
    var age = 30;
    console.log(age);// 30
    console.log(typeof age);// number

// 2. string //
/*
Strings are text values whether it's a single letter or an entire paragraph. 
A string is always in qoutes 
these can be single or double qoutes.
*/
    let birthdayMonth = 'December';
    let zodicSgin = 'sag';
    let favoriteColor = 'yellow';
    let luckyNumber = 4;
    console.log(birthdayMonth);

// 3. boolean //
/*
The boolean data type only has two values it can either be
TRUE or FALSE. Booleans can be used to compare 
and assess condition and then perfom an action depending whether 
or not the condition is true or false.
 */
    console.log(20 > 100);// false;
    console.log(100 > 10);// true;

    let bootCamp = 'not so easy'
console.log(bootCamp === 'not so easy');// true
console.log(bootCamp !== 'not so easy');// false

// 4. undefined //
/*
Undefined is a data type that is not assigned a value.
 It is a data type that is not defined.
*/
 let basketballPlayer;
 console.log(basketballPlayer);// undefined

// 5. array //
/*Arrays are ordered lists of values. 
Arrays are mutable meaning 
we can change the values of the array.
*/

let codingLanguage = ['javascrip', 'java', 'python', 'c++', 'C', 'Jscript'];
console.log(codingLanguage);// ['javascrip', 'java', 'python', 'c++', 'C', 'Jscript']
console.log(codingLanguage.length);// 6
console.log(codingLanguage[0]);// javascrip
console.log(codingLanguage[codingLanguage.length - 1]);// Jscript

// 6. null //
/*
Null is a data type 
that has only one value it is nothing. 
Null is used to represent the 
absence of any object value. 
*/
    let cost = null;
    console.log(cost);// null

// 7. object //
/*
Objects are unordered lists of data. 
They are mutable meaning 
we can change the values of the object.
*/
let Artist = { 
 firstName: 'Bruno',
 lastName: 'Mars',
 age: 38,
 occupation: 'musician',
 songs: ['talking to the moon', 'Granade', 'That\s what I like']
 };
 console.log(Artist);// { firstName: '', lastName: '', age:}
 console.log(Artist.occupation);// musician
 console.log(Artist.songs[2]);// That\s what I like
 console.log(Artist.songs);// ['talking to the moon', 'Granade', 'That\s what I like'];

// 8. function //
/*
functions are known as first class citizens because 
they can be passed around like variables 
and can be assigned to variables.
functions are reusable blocks of code 
that can be called upon to perform a specific task.
*/
function favoriteMovie(movie, actor) {
  return movie + actor;
}
console.log(favoriteMovie('Big Daddy', 'Adam sandler'));

// 9. NaN //
/*
NaN is a data type that represents a value that is not a number. 
NaN is a property of the global object.
 */

console.log(Math.sqrt(-2));// NaN

// 10. infinity //
/*
Infinity is a data type that represents infinity. 
Infinity is a property of the global object.
*/

console.log(1 / 0);// Infinity

// 11. -infinty //
/*
 -Infinity is a data type that represents negative infinity. 
 -Infinity is a property of the global object
 */

 console.log(-1 / 0);// -infinity

 // 12.  primitive/simple and comlex data types //
 /*
 What is the difference between primitive/simple and complex data types?
 primitive values passed to a function By Copy just means that the function gets a copy of the value. 
 Meaning that the function does not get a reference to the original value. While complex are the oppsite 
 and are Copied By Reference.
 */

 
 /**
  * What is copy by value?
  * 
  * - primitive data types (numbers, strings, booleans)
  * - immutable (cannot be changed)
  * - primitives are copied by value
  */
    // example of copy by value:
    var a = 5;
    var b = a;
    b = 7;
    console.log(a); // 5
    console.log(b); // 7

/**
 * What is copy by reference ?
 * 
 * - non primitive data types (arrays, objects)
 * - mutable (can be changed)
 * - non primitives are copied by reference
 */
    // example of copy by reference:
    var a = [1, 2, 3];
    var b = a;
    b[0] = 4;
    console.log(a); // [4, 2, 3]
    console.log(b); // [4, 2, 3] 