function isLeapYear(year){
    if(year%100 !==0 && year%4===0){
        return true;
    }
    if(year%100 ===0 && year%400 ===0){
        return true;
    }
    
    return false;
}

const isLeap = isLeapYear(2100);
console.log(isLeap);