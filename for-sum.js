let sum =0;
for(let i=1;i<=10;i++){
    sum = sum +i;
}

console.log(sum);

for(let i=10;i>=0;i--){
    console.log(i);
}

// for(let i=10;i<=10;i--){
//     console.log(i);
// } can turn off the loop using control+c;

let n=0;

while(n<50){
    n++;
    if(n%5 !==0){
        continue;
    }
    console.log(n);
}