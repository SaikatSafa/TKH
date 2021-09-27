function letterGuesser() {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let randomNumber = Math.floor((Math.random() * letters.length));
  let randomLetter = letters[randomNumber];
  let guess = parseInt(prompt("Your letter is " + randomLetter + ". Guess " + randomLetter + "'s index number."));

  if (guess == randomNumber) {
    alert("You definitely know the alphabet!");
  }
  else {
    alert("incorrect, you will have to re-learn the abc's. The index of " + randomLetter + " is actually " + randomNumber + ".")
  }

  // console.log(letterRandom);
  // console.log(letters[2]);
}

letterGuesser();
