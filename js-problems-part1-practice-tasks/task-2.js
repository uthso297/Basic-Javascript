/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/
let numbers = [5,6,11,12,98, 5];

function countFrequency(newNumbers,nums){
    let count = 0;
    for(const num of newNumbers){
        if(nums === num){
            count++;
        }
    }
    return count;
}

const result = countFrequency(numbers,5);
console.log(result);
const result1 = countFrequency(numbers,25);
console.log(result1);