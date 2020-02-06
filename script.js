// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// let includeUppercase = false;
// let includeLowercase = false;
// let includeSpecial = false;
// let includeNubmbers = false;
let charCount;

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialArray = ["!", "'", "@", "$", "&", "%", "+", ",", "-", "/", ";", ":", "<", ">", "=", "^", "*"]
var choices = [""];
var password = "";


function userQ() {

  charCount = prompt("How many characters do you want? 8-128")
  if (charCount < 8 || charCount > 128) {
    alert("invalid length, please retry")

  } else {
    includeUppercase = confirm("Do you want upper case letters?");


    includeLowercase = confirm("Do you want lower case letters")


    includeSpecial = confirm("do you want special charcaters?")

    includeNubmbers = confirm("Do wou want numbers charcaters")

    console.log("includeUppercase is " + includeUppercase)
    console.log("includeLowercase is " + includeLowercase)
    console.log("includeSpecial is " + includeSpecial)
    console.log("includeNubmbers is " + includeNubmbers)
    console.log(charCount)

  }

  if (includeUppercase == false && includeLowercase == false && includeNubmbers == false && includeSpecial == false) {
    alert("You must select some variables")
  }
  else {
    if (includeUppercase) {
      choices.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")

    }
    if (includeLowercase) {
      choices.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")

    }
    if (includeNubmbers) {
      choices.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)

    }
    if (includeSpecial) {
      choices.push("!", "'", "@", "$", "&", "%", "+", ",", "-", "/", ";", ":", "<", ">", "=", "^", "*")

    }
    console.log(choices)
    console.log(charCount)

    if (charCount) {
      for (var i = 0; i < charCount; i++) {
        password += choices[Math.floor(Math.random() * Math.floor(choices.length))]
      }
    }
    console.log(password)
  }
  document.getElementById("password").value = password
  console.log(password)
}

document.getElementById("generate").onclick = userQ;

// how to reset the variables when click generate 




// if (charCount) {
//   for (var i = 0; i <= charCount; i++) {
//     password = password + choices.charAt(Math.floor(Math.random() * Math.floor(choices.length -1)))
//   }
//  console.log(test)
//     console.log(charCount)
//     console.log(password)
// }
// test = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)]
// let randLowerCase =lowerCaseArray[ Math.floor(Math.random()*lowerCaseArray.length)]
// console.log (randLowerCase)
// let randNumb =numberArray[ Math.floor(Math.random()*numberArray.length)]
// let randSpecial =specialArray[ Math.floor(Math.random()*specialArray.length)]

function copyPassword(){

  document.getElementById("password").select();

  document.execCommand('Copy')

  alert("password has been coppied")
}
