const heights = [10,20,30,40,42,55];
const heights1 = [10,20,30,40,42,55,100,200];
let taller = 0;
function tallest(numbers){
    for(const height of numbers){
        if(height>taller){
            taller = height;
            
        }
        
    }
    return taller;
}
const result = tallest(heights);
console.log(result);
const result1 = tallest(heights1);
console.log(result1);