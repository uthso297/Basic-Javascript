// we are looking for the length of the largest word :)
function largestWord(words){
    let maxLength = 0;
    let currentLength = 0;
    for(const char of words){
        if(char === ' '){
            if(currentLength>maxLength){
                maxLength=currentLength;
            }
            currentLength=0;
        }
        else{
            currentLength++;
        }
        if(currentLength>maxLength){
            maxLength=currentLength;
        }
    }
    return maxLength;
}

const line = 'I am learning programming to become a programmer';
const result = largestWord(line);
console.log(result);