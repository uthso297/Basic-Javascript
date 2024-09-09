/*
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(numbers){
    let sum =0;
    const si = numbers.length;
    for(const num of numbers){
        sum +=num;
    }
    return sum/si;
}


const nums = [1,2,3,4,5,6,7,8,9,10];

console.log(make_avg(nums));
