const _ = require('lodash');
const moment = require('moment')

// Verify the difference between array
const diff = _.difference([2,4,5,6,7],[4,5,6,7]);
console.log(diff);

// Making the concatenation between arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = _.concat(arr1,arr2)
console.log(arr3);

// Working with package moment.js, we help with format data;

console.log(moment().format());
console.log(moment().format('D/M/Y'));
console.log(moment().format("D/M/Y, h:mm:ss"));


