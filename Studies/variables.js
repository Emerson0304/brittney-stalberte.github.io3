/**
 * VARIABLES:
 * 
 * 0: To hold things in memory during the life-cycle of a 
 * program, we can use variables. Variables
 * are named identifiers that can point to values of a 
 * particular type, like a number, string,
 * Boolean, Array, Object or another data-type. Variables 
 * are called so because once created, we 
 * can CHANGE the value (and type of value) to which they
 * point.
 * 
 * 1: To create a variable we use the keyword, var, 
 * followed by a name (id or alias) for our variables.
 * 2: There are 2 phases of using variables: declaration and initialization (or assignment).
 */
 
 
  // 1. declaration //
 /* 
 At the declartion phase, the variable 
 myName is undefined because 
 we have NOT initialized it to anything
 */
    var myName;
 console.log(myName);// prints => undefined
 
// 2. initialization or assignment
/* When you assign a value to an undeclared variable.*/ 

myName = 'Brittney';
console.log(myName);// prints => Brittney

// 3. Re-assignment 
// Changing or updating the value of a perviously assigned variable

myName = 'Brother';
console.log(myName);// prints => Brother


// 0: var
// Can be redeclared 
// Can be reassigned
// can be 
//naturally global or function scoped

// 1: let
// CANNOT be redelared
// can be reassigned
// can be initialized without a value
//naturally blocked scoped

// 2: const => declaring CONSTANTS
// CANNOT be redelared
// CANNOT be reassigned 
// CANNOT be initialized witout value
// naturally blocked scoped
const user = {
   username: 'emerson',
   loggedIn: true,
   dateJoined: 'October 9, 2023'
};



// 3: Hoisting

 