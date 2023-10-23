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

//Define the arrayOrObject function 
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

//Define the capitalizeWord
function capitalizeWord(string) {

   // return 'Welcome <Name>!' using uppercase method 
    return string.charAt(0).toUpperCase() + string.slice(1);
   
   
   }

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Define the capitalizedWords function
function capitalizeAllWords(string) {
// Split the string into an array of words.
   const words = string.split(' ');
// Capitalize the first letter of each word and join them back into a string.
   const capitalizeAllWrds = words.map((word) => {
return word.charAt(0).toUpperCase() + word.slice(1);
   });
// Join the capitalized words with spaces and return the result.
   return capitalizeAllWrds.join(' ');
}

 //////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Define the welcomeMessage function
function welcomeMessage(object) {
return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!"
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Define the profileInfo function 
function profileInfo(object) {
if(object && object.name && object.species){
   let name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
   let species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
   return name + " is a " + species;
   }
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Define the maubeNoises function.
function maybeNoises(object) {
if(object && object.noises && Array.isArray(object.noises) && object.noises.length > 0){
   // using the join method to concat the elements in the noises array.
   return object.noises.join(' ');
}else {
//if there are no noises return 'there are no noises'"
   return 'there are no noises';
}


}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Define hasWord function
function hasWord(string, word) {
//split the string into words and check if the given word is in the array
let wordsArray = string.split(' ');
return wordsArray.includes(word)

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Defined the addFriend function.
function addFriend (name, object) {
// Add the name of the friends array.
object.friends.push(name);
//return the new object.
return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Define the isFriends function
function isFriend(name, object) {
   if(object.friends && object.friends.includes(name)){
      return true;
   }else {
      return false;
   }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Define the nonFriends function.
function nonFriends(name, array) {
   
   var output = [];
   for (var i = 0; i < array.length; i++) {
     if (array[i].name !== name) {
       if (!array[i].friends.includes(name)) {
         output.push(array[i].name);
       }
     }
   }
    return output;
}



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Define updatedObject function
function updateObject(object, key, value) {
// create the property with the provided key and value.
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Define removeProperties function.
function removeProperties(object, array) {
   for(let i = 0; i < array.length; i++){
      var removed = array[i];
      if(object.hasOwnProperty(removed)){
         delete object[removed];
      }
   }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
// 
let deduplicatedArray = [];

for(let i = 0; i < array.length; i++){
   if(deduplicatedArray.indexOf(array[i]) === -1){
      deduplicatedArray.push(array[i]);
   }
}
return deduplicatedArray;

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