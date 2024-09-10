/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/
// we are looking for the length of the largest word :)
function largestWord(words){
    let word='' ;
    let maxWord='';
    for(const char of words){
        if(char === ' '){
            if(word.length>maxWord.length){
                maxWord=word;
                
            }
            word = '';
        }
        else{
            word += char;
        }
    }
    if (word.length > maxWord.length) {
        maxWord = word;
    }
    return maxWord;
}

const line = 'I am learning programming to become a programmer';
const result = largestWord(line);
console.log(result);