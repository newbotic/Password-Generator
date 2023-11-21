// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options

function getPasswordOptions() {
  let userInput = prompt("Choose the password length in the range [8..128]");
  
  // converting variables to numbers

  userInput = parseInt(userInput);

// use logical operator or

  if (!userInput || isNaN(userInput) || userInput < 8 || userInput > 128) {
    alert("Invalid input. Please enter a number in the range [8..128].");
    return null;
  }

  return userInput;
}



// Function for getting a random element from an array

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input

function generatePassword() {
  var passwordLength = getPasswordOptions();
  if (passwordLength === null){
    return;//Exit if user input is invalid
  }

// declare variables

  var password = "";
  var availableCharacters = [];
//use confirm to get input from user
  if (confirm("Include uppercase characters?")) {

    //use concat method to joins two arr

    availableCharacters = availableCharacters.concat(upperCasedCharacters);
    password += getRandom(upperCasedCharacters);//call getRandom function
  }

  if (confirm("Include lowercase characters?")) {
    availableCharacters = availableCharacters.concat(lowerCasedCharacters);
    password += getRandom(lowerCasedCharacters);
  }

  if (confirm("Include numeric characters?")) {
    availableCharacters = availableCharacters.concat(numericCharacters);
    password += getRandom(numericCharacters);
  }

  if (confirm("Include special characters?")) {
    availableCharacters = availableCharacters.concat(specialCharacters);
    password += getRandom(specialCharacters);
  }

  for (var i = password.length; i < passwordLength; i++) {
    password += getRandom(availableCharacters);
  }

  return password;
}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
