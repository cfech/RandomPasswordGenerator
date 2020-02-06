// Setting user variable

let charCount;

//Setting my generatePassword function to starts when button with id="generate" is clicked

document.getElementById("generate").onclick = generatePassword;

// Function called "Generate Password"

function generatePassword() {

  var choices = [];
  var password = "";

  //prompt for user to select length of password they desire, while limiting selection to between 8 and 128

  charCount = prompt("How many characters do you want? 8-128")
  if (charCount < 8 || charCount > 128) {
    alert("invalid length, please retry")

    //If user enters a number in the acceptable range they are asked to confirm which character types the want to include in their password

  } else {
    includeUppercase = confirm("Do you want upper case letters?");


    includeLowercase = confirm("Do you want lower case letters")


    includeSpecial = confirm("do you want special characters?")

    includeNumbers = confirm("Do wou want numbers characters")
  }

  //if statement to alert the user if they have not selected any variables

  if (includeUppercase == false && includeLowercase == false && includeNumbers == false && includeSpecial == false) {
    alert("You must select some variables")
  }
  //Else statement will push all selected categories to the choices array

  else {
    if (includeUppercase) {
      choices.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")

    }
    if (includeLowercase) {
      choices.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")

    }
    if (includeNumbers) {
      choices.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)

    }
    if (includeSpecial) {
      choices.push("!", "'", "@", "$", "&", "%", "+", ",", "-", "/", ";", ":", "<", ">", "=", "^", "*")

    }

    console.log(choices)

    //If statement that says if charCount is true (has a value), run a for loop through the choices array, pull out 1 random character each time and store it in the password variable, for as long as the i < charCount value   

    if (charCount) {
      for (var i = 0; i < charCount; i++) {
        password += choices[Math.floor(Math.random() * choices.length)]
      }
    }
  }
  //Inserting the password into the text box with id = "password" 

  document.getElementById("password").value = password
}

//Copy button function

function copyPassword() {

  document.getElementById("password").select();

  document.execCommand('Copy')

  alert("password has been copied")
}
