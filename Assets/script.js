// My goal: to generate a password.
const generateBtn = document.querySelector("#generate");

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);


 // creating arrays - possible choices.
 
const lowerCases = ["a", "b,", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "-", "}", "}", "[", "]", "|", ":", ";", "'", "<", ">", ",", ".", "'", "?"];

// when user clicks button to generate a pw, sees prompts for password criteria.
let pwLength = "";
let confirmLowerCase;
let confirmUpperCase;
let confirmNumbers;
let confirmSpecialCharacters;

// Prompts/ Ask user to determine length and characters to include in the password

function generatePassword() {
  
  // password length 8 -128
  let pwLength = prompt("Please enter the desire length of your password a number. Length must be between 8 - 128");
  
  if (pwLength < 8 || pwLength > 128) {
    
    //throw an error
    alert("Please select a number between 8 - 128 to select password length.");
    let pwLength = prompt("Please enter the desire length of your password a number. Length must be between 8 - 128");
  };

  const confirmLowerCase = confirm("Do you want to include lower case characters?");
  const confirmUpperCase = confirm("Do you want to include upper case characters?");
  const confirmNumbers = confirm("Do you want to include numbers?");
  const confirmSpecialCharacters = confirm("Do you want to include symbols?");

  if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialCharacters) {
    alert("Please select at least one option");
  }
         
    // When all inputs are selected, set user criteria
      let selectedChoices = [];

        if (confirmLowerCase) {
          selectedChoices = selectedChoices.concat(lowerCases);
        };
            
        if (confirmUpperCase) {
          selectedChoices = selectedChoices.concat(upperCases);
        };
            
        if (confirmNumbers) {
          selectedChoices = selectedChoices.concat(numbers);;
        };
            
        if (confirmSpecialCharacters) {
          selectedChoices = selectedChoices.concat(symbols);;
        };
            
        //throw error if no inputs are selected.
            
        if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecialCharacters) {
          window.alert("Please select at least one!");
        };

        // generate pw matching selected criteria
        let newPw = "";

        // display password on the placeholder
        for (var i = 0; i < pwLength; i++) {
          newPw = newPw + selectedChoices [Math.floor(Math.random() * selectedChoices.length)];
          console.log(newPw)
        }

        // return a new password.
        return newPw;         

      }

      // Write password to the #password input
      function writePassword() {
        const password = generatePassword();
        const passwordText = document.querySelector("#password");
            
        passwordText.value = password;
            
      };