let weight = 90.5;
let height = 1.6;

let BMI = 90.5 / (1.6*1.6);

console.log(BMI.toFixed(1));

if(BMI<18.5){
    console.log("You are underweight");
}
else if (BMI>=18.5 && BMI<=24.9){
    console.log("You are normal");
}
else if(BMI>=25 && BMI <=29.9){
    console.log("You are overweoght");
}
else {
    console.log("You are Obese");
}
