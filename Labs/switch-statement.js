// Write out a Switch Statement for the pseudo code below
// Assume star wars is your favorite movie.


// If favoriteMovie is "jaws"
// Assign moviePhrase the value "You're gonna need a bigger boat."
// Else if favoriteMovie is "the shining"
// Assign moviePhrase the value "All work and no play makes Jack a dull boy."
// Else if favoriteMovie is "star wars"
// Assign moviePhrase the value "Do. Or do not. There is no try."
// Else if favoriteMovie is "forrest gump"
// Assign moviePhrase the value "Life was like a box of chocolates."
// Else if favoriteMovie is "back to the future"
// Assign moviePhrase the value "Where we're going, we don't need roads."
// Else
// Assign moviePhrase the value "Great movie choice!"

// let favMovie = "star wars";
let favMovie = prompt("Enter your Favorite Movie:").toLowerCase();

let moviePhrase;

switch(favMovie) {
  case "jaws":
    moviePhrase = "You're gonna need a bigger boat.";
    console.log(favMovie);
    console.log(moviePhrase);
    break;
  case "the shining":
    moviePhrase = "All work and no play makes Jack a dull boy.";
    console.log(favMovie);
    console.log(moviePhrase);
    break;
  case "star wars":
    moviePhrase = "Do. Or do not. There is no try.";
    console.log(favMovie);
    console.log(moviePhrase)
    break;
  case "forrest gump":
    moviePhrase = "Life was like a box of chocolates."
    console.log(favMovie);
    console.log(moviePhrase)
    break;
  case "back to the future":
    moviePhrase = "Where we're going, we don't need roads.";
    console.log(favMovie);
    console.log(moviePhrase)
    break;
  default:
    moviePhrase = "Great movie choice!";
    console.log(favMovie);
    console.log(moviePhrase)
}


// Source Baby Zoomer: https://www.w3schools.com/js/js_switch.asp
// Source Rasalghul: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// Source My google search Dot.Com: Search https://masteringjs.io/tutorials/fundamentals/compare-strings-ignore-case
