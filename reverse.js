const sentence = 'I am learning web dev';

let reverse = '';

for(const letter of sentence){

    reverse = letter + reverse;
}

console.log(reverse);

let rev = '';

for(let i=0;i<sentence.length;i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}

console.log(rev);


const reversed = sentence.split('').reverse().join('');
console.log(reversed);