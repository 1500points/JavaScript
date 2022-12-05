
let i;
//for loop: checks for condition of variable, if it is true it will do an action and run what is inside the body
for (i = 1; i <=5; i++){
    console.log ('value of i is :'+i);
}
//once condition is false run this
console.log('now the value of i is greater than 5: i=' +i);

//for in: for elements in an array
let fruits = ['apple', 'banana', 'grapes'];
let x;
for (x in fruits){
    console.log ('index value is: ' +x);
    console.log ('the element in that index position is:' +fruits[x]);
}

//for of: of uses the element in the array rather than the index
let fruitss = ['apple', 'banana', 'grapes'];
let y;
for (y of fruitss){
    console.log ('the element in array is: ' +y);
}