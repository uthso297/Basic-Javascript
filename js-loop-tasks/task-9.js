/*
Implement a countdown timer that counts down from 81 to 65.
 */
// Set the starting value
let currentNumber = 81;

// Define the countdown function
function countdown() {
    if (currentNumber >= 65) {
        console.log(currentNumber);
        currentNumber--;
    } else {
        console.log("Countdown finished!");
        clearInterval(timer); // Stop the timer when done
    }
}

// Start the countdown timer with an interval of 1000 milliseconds (1 second)
const timer = setInterval(countdown, 1000);
