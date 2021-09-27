// https://replit.com/@SaikatSafa/DebugLogicErrors1#index.js
// Run this sample code as-is and examine the output.
// Should the shuttle have launched?
// Did it?
// Do not worry about fixing the code yet, we will do that in the next series of exercises.
// ANSWER: The shuttle shouldn't have launched, but it did, so I fixed the code, I'm sorry but I couldn't help but fix the code, I'm a programmer and I want to solve it.

let launchReady = false;
let launchReadyFuel = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
   launchReadyFuel = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
   launchReadyFuel = false;
}

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady == true && launchReadyFuel == true && computerStatus == true) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}
