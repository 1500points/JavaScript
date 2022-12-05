//function is a reusable block of code
//syntax looks like 
// functions funcName(param1, param2){
//    //statements
// }

// function subt(){
//     console.log (3 - 1);
// }
// //doesn't print output until function is called from outside the function itself
// subt();

// //set up function with variables so it is reusable
// function add(a, b){
// console.log (a + b);
// }
// add(2, 4);
// //result shows 2 plus 4 as 6

//how to use return instead of console.log in function
function add(a, b){
    // console.log (a + b);
    return (a + b)
 }

 let result = add(2, 4);
 console.log (result);
 //result shows 2 plus 4 as 6
