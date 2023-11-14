/**
 * LOOPS:  
 * 
 * 0: Loops are used to perform repeated tasks based on a conditions typically
 * return true or false. A loop will continue running until the defined condition returns false.
 * 
 */

/**
*LOOPS:
*
* 0: Loops are used to repeat a block of code until a condition is met.
* Types of Loops:
* - for loops
* - for in loops
* - while loops
* - do while loops
*/

// 1. Explain while, for, and for in loops.
/*
The while loop, loops through a block of code as long as a specified condition is true.
A for loop, loops through a block of code a number of times.
The for in loop, loops through the properties of an object.
*/

// 2. Be able to loop any number of times, forward counting up to some limit, backwards counting down to 0.
// 1. looping forward 
for (let i = 0; i < 10; i++) {
    console.log(i);
  };
  // looping backwards
  for (let i = 9; i >= 0; i--) {
    console.log(i);
  };
  
  // 3. Loop through an array of numbers, forwards.
  const arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  };
  // 4. Loop through an array of numbers, backwards.
  const arr2 = [1, 2, 3, 4, 5];
  for (let i = arr2.length - 1; i >= 0; i--) {
    console.log(arr2[i]);
  };
  // 5. Loop through an array of strings.
  const arr3 = ['a', 'b', 'c', 'd', 'e'];
  for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
  };
  // 6. Loop through an array of strings, backwards.
  const arr4 = ['a', 'b', 'c', 'd', 'e'];
  for (let i = arr4.length - 1; i >= 0; i--) {
    console.log(arr4[i]);
  };
  
  // 7. Loop through an object, forwards.
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
  };
  for (let key in obj) {
    console.log(obj[key]);
  };
  // 8. Loop through an object, backwards.
  const obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
  };
  for (let key in obj2) {
    console.log(obj2[key]);
  };
  
  // 2. Loop through a block of code until a specified condition is true.
  let j = 0;
  while (j < 10) {
    console.log(j);
    j++;
  }
  // 3. Loop through a block of code until a specified condition is false.
  let k = 0;
  while (k < 10) {
    console.log(k);
    k++;
  };

  
 