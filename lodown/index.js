'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Function takes in a value and returns the value unchanged 
 * 
 * @param { Any value}: Function takes in any value
 * @returns {Any value}: Function returns i
 * 
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * filter: Filter iterates through an array and invokes 
 * a callback function on each item. 
 * If the result of invoking the callback is truthy, 
 * the item is pushed into an output array that filter returns.
 *
 * @param { Array }: The array being filtered
 * @param { Func }: function that is used to test each vale in the input array.
 * 
 * @returns { Array }: A new array containing values from the
 *  input array that is passed the callback function.
 */

    function filter(array, func){
        let result = [];
    // using _.eacch to iterate through the array
        _.each(array, function(element, index, array){
            if(func(element, index, array)){
                result.push(element);
            }
        })
        return result;
    }
module.exports.filter = filter;

/**
 * typeOf:  Determines the data type of a given value. Returns a string representing the data type.
 * @param { any } value: The value whose data type needs to be determined.
 * 
 * @returns { string }: A string representing the data type of the input value.
 * 
 */

function typeOf(value){
    if(typeof value === 'string'){
        return 'string';
    }else if(Array.isArray(value)){
        return 'array';
    }else if(value === null){
        return 'null';
    }else if(typeof value === 'object') {
        return 'object';
    } else if(typeof value === 'number'){
        return 'number';
    }else if(typeof value === 'boolean') {
        return 'boolean';
    }else if(typeof value === 'undefined'){
        return 'undefined';
    }else if(typeof value === 'function') {
        return 'function';
    }else {
        return 'unknown'
    }

    };
module.exports.typeOf = typeOf;

/**
 * first: Designed to retrieve the first elements from an input array.
 * 
 * @param { Array }: array to retrieve elements from.
 * @param { number }: (Optional) The number of elements to retrieve.
 * 
 * @returns:  If the input array is not an array, returns an empty array.
 * If the number is not a valid number, returns the first element in the array.
 * If the number is less than 0, returns an empty array.
 * If the number is greater than or equal to the array length, returns a shallow copy of the array.
 * Otherwise, returns the first <number> items of the array.
 * 
 */
function first(array, number){
    if(!Array.isArray(array)){
        return [];
    }
    if(typeof number !== 'number' || isNaN(number)){
        return array[0];
    }
    if(number < 0 ){
        return [];
    }
    if(number >= array.length){
        return array.slice();
    }
    return array.slice(0, number)
};
module.exports.first = first;

/**
 * last: Designed to retrieve the last elements from an input array. 
 * 
 * @param { Array }: array to retrieve elements from.
 * @param { number }: (Optional) The number of elements to retrieve.
 * 
 * @returns {any|Array}: If the input array is not an array, returns an empty array.
 * If the number is not a valid number, returns the last element in the array.
 * If the number is less than or equal to 0, returns an empty array.
 * If the number is greater than or equal to the array length, returns a shallow copy of the array.
 * Otherwise, returns the last <number> items of the array.
 * 
 */
function last(array, number){
    // If <array> is not an array, return []
    if(!Array.isArray(array)){
        return [];
    }
    //If <number> is not given or not a number, return just the last element in <array>.
    if(typeof number !== 'number' || isNaN(number)){
        return array[array.length - 1];
    } 
    // Otherwise, return the last <number> items of <array>
    if(number <= 0 ){
        return [];
    }
    if(number >= array.length){
        return array.slice();
    }
    return array.slice(-number)
};
module.exports.last = last;

/**
 * indexOf: This function is designed to find 
 * the index of a specific value within an input array.
 * 
 * @param { Array }: The array to search for the value.
 * @param { value }: The value to find in the array.
 * 
 * @returns {number}: Function returns the index of the element if found and -1 if it is not found.
 * 
 * 
 */
function indexOf(array, value){// takes in two arguments array & value 
    // for loop to iterate through the array.
    for(let i = 0; i < array.length; i++){
    // determine if the array equal to the value  
        if(array[i] === value){
            return i;
        }
    }
    // return -1 if <value> is not in <array>
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Is designed to check whether a specific 
 * value exists within an input array.
 * 
 *@param { Array }: Function takes in an array
 * @param { value }: Function takes in a value 
 * 
 * @returns: A boolean 
 */
function contains(array, value){
    return array.includes(value);
};
module.exports.contains = contains;

/**
 * reject: The reject function is designed to filter elements
 * from an input array based on the result of 
 * a provided func function.
 * 
 * @param { Array }: Function takes in an array
 * @param { function }: A function to test each element in the array.
 * 
 * @returns { Array }: An array with elements for which the function returned false.
 * 
 */
function reject(array, func){
    let rejected = [];
    // Iterate through the array.
    for(let i = 0; i < array.length; i++){
    // call the provided function on each element
        if(!func(array[i], i, array)) {
    // If the function returns false, add the element to rejected
            rejected.push(array[i])
        }
    }
// return the array with elements for which the function returned false.
    return rejected;
}
module.exports.reject = reject;

/**
 * extend: Designed to merge the properties of multiple 
 * source objects into a target object.
 * 
 * @param { Object} (target) : The target object to merge into.
 * @param { Object} (...sources): Multiple source objects to merge from.
 * 
 * @returns {Object}: The target object with merged properties.
 */
function extend(target, ...sources){
    for(let source of sources) {
        for(let key in source){
            if(Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}
module.exports.extend = extend;

/**
 * map: Designed to create a new array or collection
 * by appling a function func to each elemnet or property
 * in an input collection.
 * 
 * @param { Array or Object } (collection):  The collection over which to iterate.
 * @param { func }: The function to be applied to each element or property in the collection.
 * 
 * 
 * @returns { Array }: An array containing the values obtained by applying the callback function to each
 * element or property of the input collection.
 * 
 */
function map(collection, func){
    let map = [];
    //check if the collection is an array
    if(Array.isArray(collection)) {
        //Iterate through the array
        for(let i = 0; i < collection.length; i++){
            map.push(func(collection[i], i, collection))
        }
    } else if(typeof collection === 'object' && collection !== undefined){
        // iterate through the object
        for(let key in collection){
            map.push(func(collection[key], key, collection))
        }
    }
    return map;
}
module.exports.map = map;

/**
 * pluck: Designed to extract a specific property's 
 * values from an array of obejects and return 
 * those values as a new array.
 * 
 * @param { Array }: An array of objects.
 * @param { string }: The property to extract from each object.
 * 
 * @returns {Array}: An array containing the value of the specified property
 * for every element in the array.
 */
function pluck(array, property){ // takes in two arguments array and property.
    //iterate over the array of objects
    return _.map(array, function(object){
        return object[property];
    });
};
module.exports.pluck = pluck;

/**
 * partition: Is designed to partition an array into two
 * subarrays based on a specified condition.
 * 
 * @param { Array }: The array to partition.
 * @param { func }:  A function used to test each element in the array.
 * 
 * @returns {Array}: An array containing two subarrays.
 * The first subarray contains elements for which the function returned true.
 * The second subarray contains elements for which the function returned false.
 */
 
function partition(array, func){ // takes in two arguments array and func

    let truthy = [];
    let falsy = [];

    for(let i = 0; i < array.length; i ++){
        let element = array[i];
        let key = i;
        if(func(element, key, array)){
            truthy.push(element);

        }else {
            falsy.push(element)
        }
     }
     return [truthy, falsy];
}
module.exports.partition = partition;

/**
 * every: Is designed to check if all elements in a given 
 * collection satisfy a specified condition.
 * 
 * @param { collection }: Fucntion takes in an array
 * @param { func }: Takes in an optional function 
 * 
 * @returns: A boolean 
 */

function every(collection, func){
    if(Array.isArray(collection)){
        if(!func){
            for(let i = 0; i < collection.length; i++){
                if(!collection[i]){
                    return false
                    
                }
            }
        } else {
            for(let i = 0; i < collection.length; i++){
                if(func(collection[i]) === false){
                    return false;
                }
            }
        }
    }else {
      
    }
   return true;
 }
 module.exports.every = every;

 /**
  * some: Is designed to check if at least one element in a given 
  * collection satisfies a specified condition.
  * 
  * @param { collection }:Fucntion takes in an array
  * @param { func }: Takes in an optional function 
  * 
  * @returns: A boolean 
  * 
  */
 function some(collection, func){ // takes in two arguments collection & function

    // If function is not provided, check if one element is truthy.
    if(func === undefined){
    for(let element of collection){
        if(element){
        return true;
        }
    }
    return false;
}

    //checks if collection is an array
if(Array.isArray(collection)){
  for(let i = 0; i < collection.length; i++){
    if(func(collection[i], i, collection)){
        return true;
    }
  }  
  return false;
}
// checs if collection is an object.
if(typeof collection === 'object' && collection !== undefined) {
    for(let key in collection){
        if(func(collection[key], key, collection)){
            return true
        }
    }
    return false;
}
 return false;
};
module.exports.some = some;

/**
 * reduce: Is designed to apply a specified function to each element
 * of an input array while accumulating a reslut, then returns the final 
 * accumulated result.
 * 
 * @param { Array }: The array to reduce.
 * @param { func }:  A function to apply to each element in the array.
 * @param { seed }: (Optional) The initial value for the accumulation.
 * 
 * @returns {any}: The accumulated result after applying the function to each element.
 * 
 */
function reduce(array, func, seed){
    let result; 
    if(seed === undefined){
        result = array[0];
        for(let i = 1; i < array.length; i++){
            result = func(result, array[i], i);
        }
    }else{
        result = seed;
        for(let i = 0; i < array.length; i++){
            result = func(result, array[i], i);
        }
    }
    return result;
}
module.exports.reduce = reduce;


/**
 * Unique: Designed to create a new array that 
 * contains only the unique elements from
 * the input array
 * 
 * @param { Array }: extract unique elements from the input array.
 * 
 * 
 * @returns {Array}: An array containing only unique elements from the input array.
 * 
 */
function unique(array){
    let unique = [];
    // iterate through the array using a for... in loop
    for(let element of array){
    //check if the current element is not already in the unique array.
     if(!unique.includes(element))
// If it's not in the unique array, add it 
        unique.push(element);
     
    }

    return unique
};
module.exports.unique = unique;


