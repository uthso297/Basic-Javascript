console.log(10 == 10);
console.log(10 === '10');
var age = 19;
age >= 18 ? console.log("vote") : console.log("ghumao");

let price = 500;
const isLeader = false;

if(isLeader == true){
    price = 0;
}

else{
    price = price + 10;
}

console.log(price);

price = isLeader === true ? 0 : price + 10;

console.log(price);

if(!isLeader){
    console.log("Leader is not coming");
}
else{
    console.log("Leader is coming");
}

let score = 75;
let grade;
if (score >= 90) {
 grade = "A";
} else if (score >= 80) {
 grade = "B";
}
console.log(grade);
console.log(6 != 6)