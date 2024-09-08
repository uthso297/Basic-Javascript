/*
Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.
*/
const book = 'Pother Pachali';
const fruits = ['mango','banana'];
const check = Array.isArray(book);
console.log(check);
const check1 = Array.isArray(fruits);
console.log(check1);
if(check == false){
    console.log("Not an array");
}
if(check1){
    console.log("This is an array");
}