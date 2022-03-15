// Assignment Code
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //NEED TO DEFINE THIS FUNCT.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// NEW CODE ADDED
function  generatePassword() {
var characterAmount = window.prompt ("How many characters would you like included in your password?", 8);
// console.log(characterAmount);

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// console.log(lowercaseLetters);

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// console.log(uppercaseLetters);

var  numericalValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// console.log(numericalValues);

var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".","/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]; 
//"\" NOT WORKING
// console.log(specialCharacters);

var passwordArray = [];

if (confirm("Click OK to include lowercase letters.") == true) {
  passwordArray = passwordArray.concat(lowercaseLetters);
};

if (confirm("Click OK to include uppercase letters.") == true) {
  passwordArray = passwordArray.concat(uppercaseLetters);
};
if (confirm("Click OK to include numerical values.") == true) {
  passwordArray = passwordArray.concat(numericalValues);
};
if (confirm("Click OK to include special characters.") == true) {
  passwordArray = passwordArray.concat(specialCharacters);
};
console.log(passwordArray);
var password = "";

for (var i = 0; i <= characterAmount; i++) {
  password += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  // console.log(lowercaseLetters[Math.floor(Math.random() * 26)]);
}

if (password.length < 8 || password.length > 128 ){
  return "Invalid Password. It must be greater than 8 characters and less than 128 characters";
} else {
  return password;
};
}