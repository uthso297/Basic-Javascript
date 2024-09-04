const friends = ['Waren','Elon','Bill','Mark'];
for(const friend of friends){
    // console.log(friend);
}

for(let i=0 ;i<friends.length;i++){
    console.log(friends[i]);
}

let j=0;
while(j<friends.length){
    console.log(friends[j]);
    j++;
}

const numbers = [1,2,3,4,5,6,7,8,9]

numbers.reverse();
console.log(numbers);

const sortedFriends = friends.sort();
console.log(sortedFriends);