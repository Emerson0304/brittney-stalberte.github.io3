//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// Define the objectValues function 
function objectValues(object) {
//an empty array to store the values of the object
let valuesArray = [];
//Using a for... in loop to loop through the object
for(let key in object){
   if(object.hasOwnProperty(key)){
//using the push method to help push the values into the valuesArray
     valuesArray.push(object[key])
    }
}
return valuesArray;
 } 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Define keysToString
function keysToString(object) {
// Create a varaible and use Object.keys to get an array from the object. 
let keys = Object.keys(object);
//each separated with a space using the .join method
let string = keys.join(' ');

return string;
}


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Define The ValuesToString
function valuesToString(object) {

   var values = Object.values(object);
   let stringValues = values.filter(value => typeof value === 'string');
   
return stringValues.join(' ');
}
  
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
if(Array.isArray(collection)){
   return 'array';
}else if(typeof collection === 'object'){
   return 'object';
   }
};

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
   
  
   }

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
   
      // Here I initialized an empty array called capitalizedArray to help store the capitalized words from the input array.
    const capArray = [];
      // This line of code I used a for...of loop to iterates through each word in the words array.
      for(let word of string){
    // Inside of the for... of loop this line capitalizes each word
      // word.charAt(0) helped me get the first character of the current word
      // .toUpperCase() converted the first character to uppercase
      // word.slice(1); gets the remaining characters of the word.
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      // Using .push() to add the capitalized word to the capitalizedArray.
        capArray.push(capitalizedWord);
      
    // The function then returns the capitalizedArray in uppercase letters.
    return capArray;
    };
   
}

 //////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!"
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {


}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

let friendsArray = array.find(array => array.name === name)
   if(!friendsArray){
 return [];
}
let notFriendNames = array 
.filter(array => array.name !== name)
 .filter(array => !friendsArray.friends.includes(array.name))
 .map(array => array.name)
 return notFriendNames
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}