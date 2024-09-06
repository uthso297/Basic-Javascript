
function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

const uthsoHeight = inchToFeet(75);
console.log(uthsoHeight);

// cd "P:\modeule 16.5 node js\Jantus\js-problem-tasks"

function inchToFeet2(inch){
    const feet = inch/12;
    const feetNumber = parseInt(feet);
    const inchRemaining = inch % 12;
    const result = feetNumber + " Feet " + inchRemaining + " Inches ";

    return result;
}

const uthsoHeight2 = inchToFeet2(75);
console.log(uthsoHeight2);

