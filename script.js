var special = String.fromCharCode(33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92);

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Characters
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = upperCase.toLowerCase();
  var numbers = '0123456789';
  var special = String.fromCharCode(33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92);

  // Store your characters in this empty array
  passwordArray=[]

  // Prompt user for criteria
  var passLength = prompt('How many characters would you want in the pass?');

  // Make sure the pass is more than 8 characters and less that 128
  if (passLength <8 || passLength > 128) {
    alert('Please make sure the password is longer that 8 characters and shorter than 128 characters!') 
    return;
  };

  // If the user clicks okay then they want uppercase letters
  var userWantsUpper = confirm('Click "okay" if you want uppercase characters in your password')
  if (userWantsUpper == true) {
    // Add uppercase letters to the password
    console.log('The user wants upper case letters')
  } else {
    // Do not add uppercase letters to the password
    console.log('The user does not want upper case letters')
  };

  // If the user clicks okay then they want lowercase letters
  var userWantsLower = confirm('Click "okay" if you want lowercase characters in your password')
  if (userWantsLower == true) {
    // Add lowercase letters to the password
    console.log('The user wants lower case letters')
  } else {
    // Do not add lowercase letters to the password
    console.log('The user does not want lower case letters')
  };

  // If the user clicks okay then they want numbers
  var userWantsNumbers = confirm('Click "okay" if you want numbers in your password')
  if (userWantsNumbers == true) {
    // Add numbers to the password
    console.log('The user wants numbers')
  } else {
    // Do not add numbers to the password
    console.log('The user does not want numbers')
  };
  
  // If the user clicks okay then they want special
  var userWantsSpecial = confirm('Click "okay" if you want special characters in your password')
  if (userWantsSpecial == true) {
    // Add special characters to the password
    console.log('The user wants special characters')
  } else {
    // Do not add special characters to the password
    console.log('The user does not want special characters')
  };
  
  // Incorporate the passLength var into a for loop with chosen character preferences and throw some math.floor and math.random up in there
  for (i = 0; i < passLength; i++) {}
  
  // Add all the specifications and return the password
  return 'Generated password would go here'
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

