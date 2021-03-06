// Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] show months 5 and 11 per console (use console.log).

const array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(array[4] + ' - ' + array[10]);

// Sort the array of months alphabetically and display it by console (use sort).

console.log(array.sort());

// Add an element to the beginning and end of the array (use unshift and push).

array.unshift('Turquía');
array.push('Barcelona');
console.log(array);

// Remove an element from the beginning and the end of the array (use shift and pop).

array.shift();
array.pop();
console.log(array);

// Reverse the order of the array (use reverse).

array.reverse();
console.log(array);

// Join all the elements of the array in a single string where each month is separated by a hyphen - (use join).

console.log(array.join(' - '));

// Create a copy of the array of months that contains from May to November (use slice).

const arrayCopy = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let newArray = arrayCopy.slice(4,11);
console.log(newArray);