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
 */