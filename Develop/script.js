// Assignment code here

var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = '01234567890';
var special = '~!@#$%^&*()_+{}[]|\:";<>?,./';
var minLength = 8;
var maxLength = 128;

// Write password to the #password input
function writePassword() {

  function generatePassword() {
    var passwordLength = window.prompt('Enter password length, it must be at least 8 characters and no more than 128 characters.');
    var useLower = window.confirm('Do you wish to include lower case characters?');
    var useUpper = window.confirm('Do you wish to include uppercase characters?');
    var useNumeric = window.confirm('Do you wish to include numeric characters?');
    var useSpecial = window.confirm('Do you wish to include special characters?');

    let validChar = '';

    if (passwordLength < minLength || passwordLength > maxLength ) {
      return false
      ;
    }

    if (useLower) {
      validChar += alphaLower;
    }

    if (useUpper) {
      validChar += alphaUpper;
    }

    if (useNumeric) {
      validChar += num;
    }

    if (useSpecial) {
      validChar += special;
    }

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      password += validChar[Math.floor(Math.random() * (validChar.length))]
    }

    return password
  }
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);


