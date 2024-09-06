function evenNumbersOnly(numbers){
    const even =[];
    for(const num of numbers){
        if(num%2===0){
            console.log(num);
            even.push(num);
        }
        
    }
    return even;
}

const numbers = [1,2,3,4,5,6,7,8,9];
const evens = evenNumbersOnly(numbers);
console.log("Even numbers are: ", evens);