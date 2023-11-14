
/**
 * STRING MANIPULATION:
 * 
 * 0: String manipulation is the process of changing
 * a string into another string. 
 */


// 1. With operators
let message = "i want to be an, art desginer of any sort. ";
let myName = "Hello, my name is Brittney I am 30 years old and ";
let welcomeMessage = myName + message 
console.log(welcomeMessage);

// 2. With Methods 

// 6. With toUpperCase()
let welcomeMessage6 = myName.concat("i want to be an, art desginer of any sort. ");
console.log(welcomeMessage6.toUpperCase());

// 5. With charAt()
let welcomeMessage5 = myName.concat("i want to be an, art desginer of any sort. ");
console.log(welcomeMessage5.charAt(0));

// 4. With length property
let welcomeMessage4 = myName.concat("i want to be an, art desginer of any sort. ");
console.log(welcomeMessage4.length);

// 7. With toLowerCase()
let welcomeMessage7 = myName.concat("i want to be an, art desginer of any sort. ");
console.log(welcomeMessage7.toLowerCase());
