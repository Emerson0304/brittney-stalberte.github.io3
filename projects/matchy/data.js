/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create a variable named animal and assign it to an empty object.
var animal = {};
// **dot notation** give animal a **property** named species with a value of any animal species.
animal.species = 'Tiger';
// **bracket notation** give animal a **property** called name with a value of the animal's name. 
animal['name'] = 'Tony'
//using either nontation, give animal a **property** called noises with a value of empty array.
animal.noises = [];
// print animal object to the console
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Create  a variable named noises and assign it to an empty array.
var noises = [];
// Using **bracket notation** give noises its first element. A string representing a sound your animal might make.
noises[0] = 'growl';
// Add another noise to the end of the array using an array function
noises.push('roar');
// add an element to noises
noises.unshift('chuff');
// Using **braket syntax** add another element to the end of noises.
noises[noises.length] = 'moan';
//Log the length of noises
console.log(noises.length);
// log 
console.log(noises[noises.length - 1]);

console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Using **bracket nontation**, assgin the noises property on animal to our new noises array.
animal['noises'] = noises;

//
animal.noises.push('purr')
// log animal
console.log(animal); 


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a variable named animals and assign it to an epmty array.
var animals = [];

// push our animal that we created to aniamls
animals.push(animal);

// log aniamls  
console.log(animals);

// create a varible called duck and assigni to the data:
const duck = { 
species: 'duck', 
name: 'Jerome', 
noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};

//push duck to animals
animals.push(duck);
// print animals to the console to check work.
console.log(animals);

//create two more animal objects each with species, a name, and at least two sounds and each  one of them to animals.
const elephant = {
  species: 'elephant',
  name: 'Ellie',
  noises: ['roaring', 'chirps', 'rumbling',]
};

const monkey = {
  species: 'bonnet macaque',
  name: 'Bo-Bo',
  noises: ['scream', 'howl']
};

//push the two new animals 
animals.push(elephant, monkey);

//log aniamls to check work
console.log(animals);
// log length to animals 
console.log(animal.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* Here I am choosing to use an empty array to hold my list of elements, 
it's easier to store list of friends in an array because 
it provides an ordered collection that can hold multiple items.*/
var friends = [];
// create a function to get a random index from an array

function getRandom(array){
 randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
randomAnimal = getRandom(animals);
friends.push(randomAnimal.name);
console.log(friends);

//Using **bracket nontation**, add the friends list as a **property** also named friends on just one of the animals in the array.
animals[2]['friends'] = friends;



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}