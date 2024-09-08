/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
for (let i = 1; i <= 100; i++) {
    let sqrt = Math.sqrt(i);
    if (sqrt === Math.floor(sqrt)) {
        console.log(i); 
        break;        
    }
}
