//symbol that represents action or process


//********Arithmetic
// + add - minus * multipy / divide % remainder of division
//** exponential ++ increment -- decrement
// let x = 5;
// let y = 2;
// let result = x + y;
// console.log('Result is : ' + result)

// let a = 10
// a++ //++a works too
// console.log('value of a is:' +a)
//increments the original value by 1

// let a = 10
// console.log('value of a before equation is: ' +a)
// let q = 2 * a++ //postincrement
// console.log('value of q is: ' +q)
// console.log('value of a after equation is: ' +a)
//q uses original value of a, then increments a AFTER the equation

// let a = 10
// console.log('value of a before equation is: ' +a)
// let q = 2 * ++a //preincrement
// console.log('value of q is: ' +q)
// console.log('value of a after equation is: ' +a)
//uses incremented a value in equation

//******Assignment
//= assign, += add and assign, -= sub and assign, *= multiply and assign, 
// /= divide and assign, %= modulus and assign, **= exponential and assign

//let x = 10;
//x = 10 + 20;
//= means assign. assign 10 to x

// let x = 10;
// x += 5; //means x=x+5
// console.log('x equals:' +x)

//******Comparison
// let x = 10;
// let y = 20;
// let result = x == y
// console.log(result)
//also can use console.log(x == y)
//when x and why are not equal it returns false
//use === to have it check data type, too

// let x = 10;
// let y = '10';
// let result = x == y
// console.log(result)
//this returns true because it only checks the value, and not the data type

// let x = 10;
// let y = '10';
// let result = x !== y
// console.log(result)
//result returns true because x is not equal to y

//ternary operator is like if-then-else, it takes 3 arguments.
//condition ? value if true :value if false
// let x = 11;
// let y = 12;
// let result = x > y ? x : y //if x is greater than y then return x if true, return y if it is false
// console.log(result)


//********Logical
// let A = true;
// let B = false;
// //let result = A && B //logical AND
// //let result = A || B //logical OR
// //console.log(result)

// // !A //logical NOT
// console.log(!A)

// obscure example
//console.log((10>5) || (6<3))
// true statement OR a false statement


//********Type
// let firstName = 'Mark';
// console.log (typeof firstName); //returns string
// console.log (typeof 123); //returns number
// console.log (typeof true); //returns boolean

// //let lastName = 'Hoff'; //this returns false
// //let lastName = new String('Hoff'); //this returns true
// //console.log (lastName instanceof String);

// let num1 = new Number(123) //converts the number to a number type
// console.log (num1 instanceof Number) //returns true

//********Bitwise
// let A = 1; //decimal 1 is 01 in binary
// let B = 2; //decimal 2 is 10 in binary
//console.log (A & B); //result is 0 because 01 plus 10 is 00
//console.log (A | B) //result is 3 because 01 or 10 is 11 binary

//xor
// let A = 3; //decimal 3 is 0011 in binary
// let B = 5; //decimal 5 is 0101 in binary
// console.log (A ^ B); //decimal 6 is 0110. each bit comparison can only have one 1 to return a 1
// //console.log (3^5); this works too

//not ~ which inverts bits
//5 is 00000101, ~5 is 1111010 binary, -6 in decimal
//console.log (~5);

//<< is left shift
//5 is 0101, so it shifts to 1010, which is decimal 10
