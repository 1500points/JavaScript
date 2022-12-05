//arrays are variables with multiple indexed items. index starts at position 0
let numbers = [1, 2, 3, 4, 5];
console.log (numbers);

let fruits = ['apple', 'banana', 'grapes'];
console.log (fruits);
//to print specific index position from array
console.log (fruits[1]);
//to replace an entry in array
fruits[1] = 'orange'
console.log (fruits[1]);
//to add to array
fruits.push('cherry');
console.log (fruits);
//to show number of elements in the array
console.log (fruits.length);

//can use for loop
let x;
for(x in fruits){
    console.log (fruits[x]);
}
//this also works the same
for (x of fruits){
    console.log(x)
}