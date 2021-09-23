// 1) If x is evenly divisible by both 3 and 5 (for example 0 or 15), set result to “fizzbuzz”.

// 2) Otherwise if x is evenly divisible by 3 (for example, 3, 6, or 9), set result to “fizz”
// .
// 3)Otherwise if x is evenly divisible by 5(for example, 10 or 15), set result to “buzz”.

// 4)If x is not evenly divisible by either 3 or 5 (for example 8), set result to x.

// 5)To test your code, set a value for x, and console.log it. Try different values.

console.log("Part 1:")


// let x = 100;
let x = prompt("Enter a number:");

if (x % 3 == 0 && x % 5 == 0) {
  console.log(x + " = fizzbuzz");
}
else if (x % 3 == 0) {
  console.log(x + " = fizz");
}
else if (x % 5 == 0) {
  console.log(x + " = buzz");
}
else {
  console.log(x + " = " + x);
}


console.log("")
console.log("Part 2:")
// Part 2
// Taking what we learned from the conditionals practice with fizzbuzz, We are going to Loop through every number from 1 to max, applying those same exact rules to each number and, before ending the loop, printing out result to the console via console.log(result). A For Loop would work.

// let x = prompt("Enter a number:");
let result = "";

for (let i = 1; i <= x; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    // console.log("fizzbuzz");
    let result = "fizbuzz";
    console.log(i + " = " + result);
  }
  else if (i % 3 == 0) {
    // console.log("fizz");
    let result = "fizz";
    console.log(i + " = " + result);
  }
  else if (i % 5 == 0) {
    // console.log("buzz");
    let result = "buzz";
    console.log(i + " = " + result);
  }
  else {
    // console.log(x);
    let result = i;
    console.log(i + " = " + result);
  }
}

console.log("")
console.log("The End.")
