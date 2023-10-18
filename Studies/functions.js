/**
 What are Javascript functions 
*/

/* 0: There's function declarations:
which is a function followed by keyword function and the name of the function.*/

//Example of a function declaration:
function players(){
};

/* 1: There's function expressions:
which are functions created inside an expression or inside another syntax construct.*/

//Example of a function expression: 
 let movies = function(){
  return "The Matrix";
  };
console.log(movies());

/* 2: There's parameters and arguments
Parameters are placed inside the functions parentheses. You can then use parameters inside the function code block.*/

 // Example of a function with parameters:
  function games(microsoft, sony){
  }; //The parameters for my games function is called microsoft and sony.
  
/*Arguments are the values that are passed into the function.*/
  
  //Example of a function with arguments:
  function favGames(game1, game2, game3){
  console.log(`My favorite games are ${game1}, ${game2}, and ${game3}.`);
  }


/* There's invoking/calling the function:
  Here I invoked my function favGames with arguments. My aguments are now Starfield, Fallout 4, and Overwatched 2.*/
  favGames("Starfield", "fallout 4", "Overwatched 2");

/*So parameters are the values inside the actual function definition and when we call that function the values are then called arguments.
 */ 

/* There's the return value:
Whenever the keyword return is used in the function execution stops and the value is returned.
*/
 
// Example of return value:
function test(){
}
console.log(test())// undefined becasue we haven't returned anything.

function test(){
return 'wassup my bootcampers'
}
 console.log(test()); // wassup my bootcampers




/*Higher ordered function. I created an arrow function that doubles numbers of my choice and prints to the console.*/
