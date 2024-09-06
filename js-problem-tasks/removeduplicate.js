const biriyaniKhor = ['Abul','Kabul','Babul','Abul','Kabul','Dabul'];

const numbers = [1,2,2,3,4,3,5,5,2,6,7,8,9];

function noDubplicateArray(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDubplicateArray(biriyaniKhor);
console.log(uniqueArray);
const uniqueArray2 = noDubplicateArray(numbers);
console.log(uniqueArray2);