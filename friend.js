let friendNum = 30;
let myNum = 90;

if (myNum >= 80) {
    if (friendNum > 80) {
        console.log("Go for a lunch");
    } else if (friendNum >= 60) { // Corrected condition
        console.log("Good luck next time");
    } else if (friendNum >= 40) {
        console.log("Message unseen");
    } else {
        console.log("Block");
    }
} else {
    console.log("Act sad and sleep");
}

let num1 =9;
let num2 =8;
let result;
result = num1>num2 ? console.log(2*num1) : console.log(num1+num2);


