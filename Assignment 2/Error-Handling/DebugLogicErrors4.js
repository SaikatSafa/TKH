// https://replit.com/@SaikatSafa/DebugLogicErrors4#index.js
// Now consider both if/else blocks together (keeping the added console.log lines).
// Run the code and examine the output.

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false?
// Is the program behaving as expected?
//ANSWER: Given the values for fuelLevel and crewStatus and computerStatus, launReady I believe should be false because in the first conditions the fuel level is insufficient so false got executed, so then the other two was true, but just because theres one wrong and two rights, doesn't mean that all is right with the and operator (&&) in computer science, but if it was the or operator (||), only then it would be different, but in our case we are sending people to the moon and launching them on space and their lives are on the line, so we have to make sure that in order for the final test to passs all the other prior tests must pass. So, no the program shouldn't behave like this... it should be fixed.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }
