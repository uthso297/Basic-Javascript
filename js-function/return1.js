function sumOfNumbers(numbers){
    let sum =0;
    for(const num of numbers){
        console.log(num);
        sum += num;

    }

    return sum;
}

const numbs = [1,2,3,4,5,6,7,8,9,10];
const sum = sumOfNumbers(numbs);

console.log(sum);
// cd "P:\modeule 16.5 node js\Jantus\js-function"
