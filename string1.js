let capital = 'Dhaka';
console.log(capital);
capital[0]='F';
console.log(capital);
// string is immutable --> not chanageable
// array is mutable --> you can change elements

const school = 'Janata Adarsha Bidyapith';

console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = "Chemistry";
const book = "chemistry";

if(subject === book){
    console.log("I am reading");
}
else{
    console.log("I am not reading");
}

if(subject.toLowerCase === book.toLowerCase){
    console.log("I am reading");
}
else{
    console.log("I am not reading");
}

const drink = 'water';
const liquid = ' water';

if(drink === liquid){
    console.log("Panir opor nam life");
}

else{
    console.log("Somudre onek pani kintu khawa jay na");
}

if(drink.trim === liquid.trim){
    console.log("Panir opor nam life");
}

else{
    console.log("Somudre onek pani kintu khawa jay na");
}