// https://replit.com/@SaikatSafa/DebugLogicErrors3#index.js
// Let’s break the code down into smaller chunks.
// Now consider the second if/else block.
// Add another console.log(launchReady) after this block and run the program.

// Given the values for crewStatus and computerStatus, should launchReady be true or false after the check?
// Is the program behaving as expected?
//ANSWER: Given the values for crewStatus and computerStatus launchReady should be true because they are both true in this statement so it should run that statement. Although I'm not really sure why in the if-statement the crewStatus is not equal to true like so, crewStatus == true &&...But yes the program is behaving as expected because crewStatus is true and computerStatus is set to green so the first statement should be the one that gets executed.

let launchReady = false;
// let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

// if (fuelLevel >= 20000) {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
   console.log(launchReady)
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }
