// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

// console.log (arrIncludes);

function getPasswordOptions() {
}

// Function for getting a random element from an array
function getRandom(arr) {
  var random = arr[Math.floor(Math.random() * arr.length)];
  return random;
} 


// Function to generate password with user input
function generatePassword() {
  var passwordLength = prompt("How many characters would you include in your password?", 10);
  console.log (passwordLength);
  passwordLength = parseInt(passwordLength);
  console.log (typeof passwordLength);
  if (typeof passwordLength === 'number' && passwordLength >= 10 && passwordLength < 64) {
  } else if (typeof passwordLength === 'number' && passwordLength < 10) {
    alert("The minimum amount of characters required to produce a strong enough password is 10, please try again!");
    prompt("How many characters would you include in your password?", 10);
  } else if (typeof passwordLength === 'number' && passwordLength > 64) {
    alert("The input has exceed the amount of characters allowed for the password generator, please try again!");
    prompt("How many characters would you include in your password?", 10);
  } else if (typeof passwordLength !== 'number'){
    alert("The following input is not a number, please try again!");
    prompt("How many characters would you include in your password?");}
    
  
  var includeSpecialcharacter = confirm("Would you like to include any special characters?");
  console.log (includeSpecialcharacter);
  var includeNumberCharacter = confirm("Would you like to include any numeric characters?");
  console.log (includeNumberCharacter);
  var includeLowercasedCharacters = confirm("Would you like to include any lower cased characters?");
  console.log (includeLowercasedCharacters);
  var includeUppercasedCharacters = confirm("Would you like to include any upper cased characters?");
  console.log (includeUppercasedCharacters);
  
  var arrCharac = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  var arrIncludes = [];//single array with string of all type of Characters
  if (includeSpecialcharacter === true) {
    arrIncludes = specialCharacters.concat(arrIncludes);
  }
  if (includeLowercasedCharacters === true) {
     arrIncludes = lowerCasedCharacters.concat(arrIncludes); //store inside [];
  }
  if (includeUppercasedCharacters === true) {
    arrIncludes = upperCasedCharacters.concat(arrIncludes); //store inside [];
  }
  if (includeNumberCharacter === true) {
    arrIncludes = numericCharacters.concat(arrIncludes); //store inside [];
  } var password = ""; //store in empty "",
  for (let i =0 ; i < passwordLength; i++) {
    var char = getRandom(arrIncludes);
    password = password + char;
  }
 return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);