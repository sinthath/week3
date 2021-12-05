// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector(".btn");

// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt('Enter password length, it must be at least 8 characters and no more than 128 characters.');
  var useLower = window.prompt('Do you wish to include lower case characters? Enter "YES" or "NO to choose")');
  var useUpper = window.prompt('Do you wish to include uppercase characters? Enter "YES" or "NO to choose")');
  var useNumeric = window.prompt('Do you wish to include numeric characters? Enter "YES" or "NO to choose")');
  var useSpecial = window.prompt('Do you wish to include special characters? Enter "YES" or "NO to choose")');

  var password = generatePassword() {
    var min = 8;
    var max = 128;
    var alphaLower = "abcdefghijklmnopqrstuvwxyz";
    var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = '01234567890';
    var special = '~!@#$%^&*()_+{}[]|\:";<>?,./';

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

    let pass = '';

    for (let i = 0; i < passwordLength; i++) {
      pass += validChar[Math.floor(Math.random() * (validChar.length))]
    }

    return pass

  };
  var passwordText = document.querySelector("#password");
  

  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
