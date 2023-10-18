/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//const { animals } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, findAnimal){
for(var i = 0; i < animals.length; i++){
    if(animals[i].name === findAnimal){
        return animals[i];
    }
 };
return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    let index = animals.findIndex(animal => animal.name === name)
    if(index !== -1){
        animals[index] = replacement;
    }

}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    let index = animals.findIndex(aniaml => aniaml.name === name)
    if(index !== -1){
        animals.splice(index, 1)
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){

       //Check that the animal Object has a property with a length > 0.
       if(animal.hasOwnProperty('name') && animal.name.length > 0 && animal.hasOwnProperty('species') && animal.name.length > 0){
        const uniqueName = animals.every((existingAnimal) => existingAnimal.name !== animal.name);
        if(uniqueName){
            animals.push(animal);
        }
            
        }
        return animals;
    }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
