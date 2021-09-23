function input(button) {
  // the text of the button that is clicked will be displayed on the screen
  document.calc.display.value += button.value;
}

function clearDisplay() {
  //Clears the screen
  document.calc.display.value = "";
}

function enter() {
  //Evaluates the string on the screen as a mathmatic equation then displays the answer back on the screen
  document.calc.display.value = eval(document.calc.display.value);
}


// each number will be separated by a comma
function average() {
  //variable to keep track of the sum starting at 0
  let sum = 0;

  //Create a list of numbers from the values passed in the calculator
  //separated by commas, array
  listOfNums = document.calc.display.value.split(',');

  //For loop designed to iterate through every element in the list in order to add
  //them to the sum variable so we can have an actual sum
  for (let i = 0; i < listOfNums.length; i++) {
    sum += parseInt(listOfNums[i]);
  }

  let average = sum / listOfNums.length;

  document.calc.display.value = average;
}

[20, 30, 51, 15, 7] // go through the array and add each element together and then divide them evenly
