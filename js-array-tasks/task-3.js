/*
Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/
const books = ['Pather Panchali','Gitanjali','Chokher Bali'];
console.log(books.includes('Javascript'));
if(books.includes('Javascript')){
    console.log("The element javascript is present");
}
else{
    console.log("The element javascript is not present");
}