// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./brittney-stalberte.github.io3/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// filter, map, each, reduce
// Iterate over a collection // USUALLY an ARRAY
//Invoke a callback function on each item of the collection one at a time

var maleCount = function(array) {
//use filter method to get all the male customers and return the number.
let males = _.filter(array, function(customer){
    return customer.gender === 'male';// true
}); // [<male>, <male>]
return males.length;

};

var femaleCount = function(array){
// using the reduce method to return the number of female customers.
    let females = _.reduce(array, function(acc, current){
        if(current.gender === 'female'){
            acc += 1;
        }
        return acc;
        }, 0);
        return females;
}

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(acc, customer){
        if(acc.age > customer.age){
            return acc;
        } else {
            return customer;
        }
    },);
    return oldest.name;
};
   

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator, customer){
        if(accumulator.age < customer.age){
            return accumulator;
        } else {
            return customer;
        }
    },);
    return youngest.name;
};

var averageBalance = function(array){
let balances = _.map(array, function(customer){
    return parseFloat(customer.balance.replace('$', '').replace(/,/g, ''))
  });

  let sum = _.reduce(balances, function(acc, balance){
    return acc + balance;
  }, 0);
  return sum / array.length;
};



var firstLetterCount = function (customers, letter){
    let lowercaseLetter = letter.toLowerCase();
    let matching = customers.filter(customer => {
        return customer.name.charAt(0).toLowerCase() === lowercaseLetter;
    });
    return matching.length;
}

var friendFirstLetterCount  = function(array, customer, letter){
if(Array.isArray(Array)){
    let lowercaseLetter = letter.toLowerCase();
    let count = array.reduce((acc, customer) => {
        if(typeof customer === 'string' && customer.length > 0){
            let names = customer.split(' ')
            if(names.length > 0){
                let firstName = names[0];
                if(firstName[0].toLowerCase() === lowercaseLetter){
                    return acc + 1;
                }
            }
        }
        return acc;
    }, 0);
    return count;

}else{
    return0;
  }
}

var friendsCount = function(customers, name){
let count = [];
for(let i = 0; i < customers.length; i++){
    if(name !== customers[i].name);
    for(let j = 0; j < customers[j].friends.length; j++){
        if(customers[i].friends[j].name === name){
            count.push(customers[i].name)
        }
    }
}
return count;
};

var topThreeTags = function(customers){
let tagCount = customers
.map(customer => customer.tags)
.flat()
.reduce((count, tag) => {
    count[tag] = (count[tag] || 0) + 1;
    return count;
}, {});
let sortedTags = Object.keys(tagCount).sort((a, b) => tagCount[b] - tagCount[a]);
let topTags = sortedTags.slice(0, 3);
return topTags;

}

var genderCount = function (customers){
    let genderSummary = customers.reduce(function(acc, current){
        if(acc.hasOwnProperty(current.gender)){
            acc[current.gender] += 1;
        }else {
            //need to create the property for that gender 
            acc[current.gender] = 1;
        }

        return acc;
        
    }, {});
   return genderSummary;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
