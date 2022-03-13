// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// NEW CODE ADDED
var characterAmount = window.prompt ("How many characters would you like included in your password?", 8);
console.log(characterAmount);

if (confirm("Click OK to include lowercase letters."));

if (confirm("Click OK to include uppercase letters."));

if (confirm("Click OK to include numerical values."));

if (confirm("Click OK to include special characters."));



