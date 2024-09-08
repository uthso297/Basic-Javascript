function multiply(num1,num2){
    if(typeof num1 !== 'number' || num2 !== 'number'){
        return "Please provide a number";
    }
    const mult = num1*num2;
    return mult;
}

const result = multiply(5, 'seven');
console.log(result);

function getSecond(numbers){
    if(Array.isArray(numbers)===false){
        return 'Please provide an array';
    }
    const second = numbers[1];
    return second;
}

const second = getSecond(45);
console.log(second);