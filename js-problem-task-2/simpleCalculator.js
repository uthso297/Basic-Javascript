function add(num1,num2){
    return num1+num2;
}
function substract(num1,num2){
    return num1-num2;
}
function multiplication(num1,num2){
    return num1*num2;
}
function division(num1,num2){
    return num1/num2;
}

function calculator(a,b,operation){

    if(operation === 'add'){
        const result = add(a,b);
        return result;
    }
    else if(operation === 'substract'){
        const result = substract(a,b);
        return result;
    }
    else if(operation === 'multiplication'){
        const result = multiplication(a,b);
        return result;
    }
    else if(operation === 'division'){
        return division(a,b);
    }
    else {
        return "Only 'add','Substract','multiply','division'";
    }
}

const result = calculator(10,9,'add');
console.log(result);
