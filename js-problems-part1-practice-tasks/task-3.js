// Write a function to count the number of vowels in a string

function countVowels(string){
    let count =0;
    for(const str of string){
        if(str==='a' || str==='e' || str==='i' || str==='o' || str==='u' || str==='A' || str==='E' || str==='I' || str==='O' || str==='U'){
            count++;
        }
    }

    return count;
}

const myName = "Md. Sihab Mahmud Uthso";
const myName1 = "Meftahul Jannat"
const result = countVowels(myName);
const result1 = countVowels(myName1);

console.log(result);
console.log(result1);