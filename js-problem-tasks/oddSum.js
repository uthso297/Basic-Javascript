function sumOfOdd(numbers){

    const odd =[];
    for(const num of numbers){
        
        if(num%2===1){
            odd.push(num);
        }
    }
    
    const count = odd.length;

    let sum =0;
    for(const number of odd){
        sum = sum + number;
    }
    const avg = sum/count;
    return avg;

}

const res = sumOfOdd([21,22,23]);
console.log(res);