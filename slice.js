const address = 'andorkilla';
const part = address.slice(2,5);
console.log(part);

const sentence = 'I am just an ordinary person';
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsStr = 'Rahim,karim,fahim,kahim,lahim,talim,dalim';
const friends = friendsStr.split(',');
console.log(friends);

const realfriend = ['Rahim','karim','dalim','fahim'];
console.log(realfriend.join());
console.log(realfriend.join('|'));
console.log(realfriend.join('-'));
