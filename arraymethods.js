let fruits = ['apple', 'banana', 'grapes'];
console.log (fruits);

//pop - to remove last indexed element in array
fruits.pop()
console.log (fruits);

//shift - to remove first indexed element in array
fruits.shift()
console.log (fruits);

//push - to add an element to array
fruits.push('cherry');
console.log (fruits);

//unshift - add an element at beginning of array
fruits.unshift('lemon');
console.log (fruits);

//delete - remove element from an indexed position, but keep the position open
//deleted item shows as <1 empty item>
delete fruits[1];
console.log (fruits);

//to add element at indexed position
fruits[1] = 'orange'
console.log (fruits);

//splice - removes specified indexed elements
fruits.splice(1,2);
console.log (fruits);

//splice - this says to add 2 elements, remove 0 elements, along with what items to add
fruits.splice(2,0, 'kiwi', 'dragonfruit');
console.log (fruits);

//slice - used to pull 2 items from the original array into a new array
let citrusFruits = fruits.slice(0,2)
console.log (fruits);
console.log (citrusFruits);

//concatenate - join two arrays consecutively together
// let evenNumbers = [2, 4, 6];
// let oddNumbers = [1, 3, 5];
// let numbers = evenNumbers.concat(oddNumbers);
// console.log (numbers);

//concatenate multiple arrays
let evenNumbers = [2, 4, 6];
let oddNumbers = [1, 3, 5];
let primeNumbers = [2, 3, 5];
let numbers = evenNumbers.concat(oddNumbers, primeNumbers);
console.log (numbers);