// / Chapter 21 (Changing Case)
// ============================

// var a = "Hello";
// console.log(a.toLowerCase());

// var x = "HELLO WORLD";
// x = x.toLowerCase();
// console.log(x);

// var y = "Iqran"
// y = y.toUpperCase();
// console.log(y)

// var a = "Iqran"
// var b = a.toLowerCase();
// console.log(b)

// var month = [ "JAN", "FEB", "MAR", "APR" ]
// for(var i = 0; i < month.length; i++){
//  var newMonth = month[i].toLowerCase()
// console.log(newMonth)
// }
  
// 

// var cityName = "PaKIStaN";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(capitalizedCityName);
// ==============================================================
// Chapter 22 - 25 (Strings)
// =========================

// sameWords = "captain"
// word = sameWords(1:3)
// print(word)

// var string = "Hello, World!";
// var length = string.length;


// var animal = "elephant";
// var startIndex = Math.floor(animal.length / 2) - 2;
// var endIndex = Math.floor(animal.length / 2) + 2;
// var last = animal.slice(startIndex, endIndex);

// console.log(last); 


// let stringVariable = "Hello, Iqran!";
// let characterCount = stringVariable.length;
// console.log(characterCount); 


// First statement to measure the number of characters in a string
// var stringVariable = "Hi, Iqran!";
// var length = stringVariable.length;
// console.log("Number of characters:", length);

// // Second statement to slice the string and assign it to a new variable
// var newVariable = stringVariable.slice(1, -3);
// console.log("New variable:", newVariable);

// var text = "To be or not to be.";
// var indx = text.indexOf("be");

// console.log(indx); 


// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");

// console.log(indx); 


// let text = "I am going to attend the class in S a i m s";

// let i = text.lastIndexOf("go");
// if (i !== -1) {
//   i += 1; // Adding 1 to get the index of the first character
// } else {
//   i = null; // No occurrence of "go" in the string
// }

// console.log(i);


// 


// let text = "Hello, world!";
// let  = text.charAt(9);

// console.log("10th character: " + c);


// let str = "Hello, World!";
// let arr = [];

// for (let i = 0; i < str.length; i++) {
//   arr[i] = str.charAt(i);
// }

// console.log(arr);


// let str = "I want to participate in module B.";
// let newStr = str.replace("module", "B");

// console.log(newStr);
// ==============================================================
// Chapter 26 (Rounding Numbers) 
// =============================

// var number = 8.9;
// var roundedNumber = Math.round(number);
// console.log(roundedNumber);


// let origNum = 0.5;
// let roundNum = Math.ceil(origNum);
// console.log(roundNum); 

// let origNum = 8.8; // Replace with your desired number
// let roundNum = Math.floor(origNum);

// console.log(roundNum);


// let origNum = 2.8; 
// let roundNum = Math.round(origNum);

// console.log(roundNum); 


// var myVariable = Math.round(0.5);

// console.log(myVariable);

// ==============================================================
// Chapter 27 (Random Numbers)
// ===========================

// Generate a random number between 0 and 1
// var random = Math.random();

// // Convert the random number to a range between 1 and 50
// var number = Math.floor(random * 50) + 1;
// console.log(number);


// // Generating a random number
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// // Printing the random number
// console.log(randomNumber);


// Function to generate a random number between min and max 
// function getRandomNumber(min, max) {
// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// //   }


// //   // Function to simulate a dice roll
// //   function rollDice() {
// //     return getRandomNumber(1, 6); // Generates a number between 1 and 6
// //   }
  

// function coinToss() {
//     var randomNumber = Math.random();
  
//     if (randomNumber < 0.5) {
//       return "Heads";
//     } else {
//       return "Tails";
//     }
//   }  
//   var result = coinToss();
//   console.log(result);
// ==============================================================
// Chapter 28, 29 (Converting Strings)
// ===================================

// function stringToInteger(str) {
//     return parseInt(str);
//   }
  
//   var str = "786";
//   var result = stringToInteger(str);
//   console.log(result); 
  

// function stringToFloat(str) {
//     return parseFloat(str); 
// }  
//   var str = "15.17";
//   var result = stringToFloat(str);
//   console.log(result); 
  

// let number = 99;
// let string = number.toString();
// console.log(typeof string); 
// ==============================================================
// Chapter 30 (Controlling the length of  decimals) 
// ================================================

// var num = 5.123456789101112;  
// var newNum = num.toFixed(3).toString();
//   console.log(newNum); 


// let number = 10.000; 
// number = parseFloat(number.toFixed(2));
// console.log(number); 


// var originalNumber = 1234.56789;
// var roundedNumber = originalNumber.toFixed(2);
// var roundedString = roundedNumber.toString();
// alert(roundedString);
// ==============================================================
// Chapter 31 () 
// ================================================


