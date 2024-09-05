function tenTimes(number){
    const result = number*10;

    return result;
}

const output = tenTimes(5);
console.log(output);

function oddEven(num){
    if(num%2 ===0){
        // console.log("Even");
        return true;
    }
    else{
        // console.log("Odd");
        return false;
    }
}
console.log(oddEven(6));

function isOdd(number){
    if(number%2===1){
        return true;
    }
    return false;
}
console.log(isOdd(6));
