// Assignment Code
var generateBtn = document.querySelector("#generate");

const strings = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "1234567890",
  special: "!@#$%^&*"
};

var passwordLength = prompt("Choose a password length between 1-128 characters.");
alert("You picked " + passwordLength + " characters.");
var charLowercase = confirm("Would you like to use lowercase characters?");
if (charLowercase === true) {
  alert("You want to include lowercase characters.");
} else {
  alert("You do not want to include lowercase characters.");
};
var charUppercase = confirm("Would you like to use uppercase characters?")
if (charUppercase === true) {
  alert("You want to include uppercase characters.");
} else {
  alert("You do not want to include uppercase characters.");
};
var charNumeric = confirm("Would you like to use numeric characters?");
if (charNumeric === true) {
  alert("You do want to include numeric characters.");
} else {
  alert("You do not want to include numeric characters.");
};
var charSpecial = confirm("Would you like to use special characters?");
if (charSpecial === true) {
  alert("You do want to include special characters.");
} else {
  alert("You do not want to include special characters.");
};



console.log(charSpecial, charUppercase, charLowercase, charNumeric, passwordLength);


function generatePassword() {
  var amount = parseInt(passwordLength);
  var choices = [];


  console.log(amount);




  if (charLowercase === true) {
    choices.push(strings["lowercase"]);
  };
  if (charUppercase === true) {
    choices.push(strings["uppercase"])
  };
  if (charSpecial === true) {
    choices.push(strings["special"])
  };
  if (charNumeric === true) {
    choices.push(strings["number"])
  };

  var choiceString = choices.join('');
  var choiceAmount = choiceString.length;
  console.log(choiceString);
  var passcode = [];
  for (j = 0; j < amount; j++) {
    var char = choiceString.charAt(Math.floor(Math.random() * choiceAmount));
    passcode.push(char);

    
  }
  
  var passcodeString = passcode.join('');
  return passcodeString;

  console.log(char);
}
// Write password to the #password input  
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)

};




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
