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

// //array of sub-stringed special characters
// var arrSpecialcharacters = specialCharacters.join("");
// console.log(specialCharacters.length);//23

// //arr of sub-stringed numeric characters
// var arrNumericcharacters = numericCharacters.join("");
// console.log(numericCharacters.length);//10

// //arr of sub-stringed lower case characters
// var arrLowercasedCharacters = lowerCasedCharacters.join("");
// console.log(lowerCasedCharacters.length);//26

// //arr of sub-stringed upper case characters
// var arrUppercasedCharacters = upperCasedCharacters.join("");

// //arr of all types of characters in single array
// var arrCharac = [specialCharacters,numericCharacters,lowerCasedCharacters,upperCasedCharacters].join(""); //turning inside into "" string
// console.log(arrCharac.length);

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
}
// console.log (arrIncludes);

function getPasswordOptions() {
  
    for (let i =0 ; i < passwordLength; i++) {
      if (includeSpecialcharacter === true && includeNumberCharacter === true && includeLowercasedCharacte === true && includeUppercasedCharacters=== true) {
        
      }
      else if (includeSpecialcharacter === true && includeNumberCharacter === true && includeLowercasedCharacte === true && includeUppercasedCharacters=== false) {

      }
      else if (includeSpecialcharacter === true && includeNumberCharacter === false && includeLowercasedCharacte === true && includeUppercasedCharacters=== false) {
        
      }
      else if (includeSpecialcharacter === false && includeNumberCharacter === true && includeLowercasedCharacte === true && includeUppercasedCharacters=== false) {
        
      }
      else if (includeSpecialcharacter === false && includeNumberCharacter === false && includeLowercasedCharacte === true && includeUppercasedCharacters=== false) {
        
      }
      else if (includeSpecialcharacter === true && includeNumberCharacter === false && includeLowercasedCharacte === true && includeUppercasedCharacters=== false) {
        
      }
      else if (includeSpecialcharacter === false && includeNumberCharacter === false && includeLowercasedCharacte === true && includeUppercasedCharacters=== true) {
        
      }
      else if (includeSpecialcharacter ===false  && includeNumberCharacter === true && includeLowercasedCharacte === true && includeUppercasedCharacters=== false) {
        
      }
    }
   
}

// Function for getting a random element from an array
function getRandom(arr) {
  var random = arr[Math.floor(Math.random() * arr.length)];
  return random;
} 


// Function to generate password with user input
function generatePassword() {


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