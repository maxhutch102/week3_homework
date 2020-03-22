// Assignment Code
var generateBtn = document.querySelector("#generate");
const strings = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "1234567890",
  special: "!@#$%^&*"
};

// Write password to the #password input
function writePassword() {
  
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
  var passwordLength = prompt("Choose a password length between 1-128 characters.");
  alert("You picked " + passwordLength + " characters.");
  console.log(charSpecial);
  console.log(charUppercase);
  console.log(charLowercase);
  console.log(charNumeric);
  
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword(lower, upper, num, spec) {
  
  let main = "";
  let pass = "";
  

  const choices = {
    lowercase: lower,
    uppercase: upper, 
    number: num,
    special: spec
  };

  for (i = 0; i < passwordLength; i++) {
    main += (object.values(choices)[i]) ? strings[object.keys(choices)[i]] : "";
    }
    if (main != "" && length > 0) {
      for (i = 0; i < length; i++) {
        pass += main[Math.floor(Math.random() * main.length)];
      }
      console.log(pass)
     

   

    }
   


  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Questions and Prompts for confirmations

