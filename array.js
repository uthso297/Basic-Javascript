const numbers = [1,4,3,5,6];
console.log(numbers.length);
console.log(numbers);
console.log(numbers[3]);
numbers.push(10,111);
console.log(numbers);
const name = ['Md','Sihab','Mahmud'];
console.log(name);
name.push('Uthso');
console.log(name);
const out1 = name.pop();
console.log(name);
console.log(out1);
numbers.shift();
console.log(numbers);
numbers.unshift(1111);
console.log(numbers);
console.log(name.includes('Sihab'));

if(name.includes('Sihab')){
    console.log("Party");
}

else{
    console.log("No party!!");
}
const fruit = 'Banana';
console.log(name.indexOf('Sihab'));
console.log(name.indexOf('Mijan'));
console.log(Array.isArray(name));
console.log(Array.isArray(fruit));