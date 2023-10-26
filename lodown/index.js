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
 * filter: Function 
 * 
 * 
 * @param { Array }: Function takes in an array.
 * @param { Function }: Function takes in a function to test each value in the array.
 * 
 * @returns { Array }: Function returns a new array...
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
 * typeOf:
 * 
 * @param { Any value}: Function takes in any value
 * @returns { string value }: Function returns a string
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
 * first:
 * 
 * @param { Array }: Fuction takes in an array
 * @param { number }: Function takes in number 
 * 
 * @returns 
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
 * last:
 * 
 * @param { Array }: Function takes in an array
 * @param { number }: Function takes in a number
 * 
 * @returns 
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
 * indexOf:
 * 
 * @param { Array }: Function takes in an array
 * @param { value }: 
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
 * contains:
 * 
 *@param { Array }: Function takes in an array
 * @param { value }:
 * 
 * @returns
 */
function contains(array, value){
    return array.includes(value);
};
module.exports.contains = contains;

/**
 * reject:
 * 
 * @param { }:
 * @param { }:
 * 
 * @returns
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
 * extend:
 * 
 * @param { object }:
 * @param { object }:
 * 
 * @returns 
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
 * map: 
 * 
 * @param { }:
 * @param { }:
 * 
 * @retrurns
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
 * pluck:
 * 
 * @param { Array }:Function takes in an array of objects  
 * @param { property }: Function takes in a property
 * 
 * @returns: An array containing the value of property
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
 * partition:
 * 
 * @param { Array }: Function takes in an array of 
 * 
 * 
 * 
 */
