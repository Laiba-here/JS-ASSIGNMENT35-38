//              .... QUESTION 1 ....
// function displayCurrentDateTime() {
//     var currentDateTime = new Date();
//     var displayElement = document.getElementById("currentDateTime");
//     displayElement.innerHTML = currentDateTime;
// }
// displayCurrentDateTime();

//              .... QUESTION 2 ....
// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "! Welcome!");
// }
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// greetUser(firstName, lastName);

//              .... QUESTION 3 ....
// function addTwoNumbers(num1, num2) {
//     return parseFloat(num1) + parseFloat(num2);
// }
// var firstNumber = prompt("Enter the first number:");
// var secondNumber = prompt("Enter the second number:");
// var sum = addTwoNumbers(firstNumber, secondNumber);
// alert("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum);

//              .... QUESTION 4 ....
// function calculate(num1, num2, operator) {
//     var result;
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = "Error! Division by zero.";
//         }
//     } else if (operator === '%') {
//         result = num1 % num2;
//     } else {
//         result = "Invalid operator!";
//     }
//     return result;
// }
// var firstNumber = prompt("Enter the first number:");
// var secondNumber = prompt("Enter the second number:");
// var operator = prompt("Enter the operator (+, -, *, /, %):");
// var result = calculate(firstNumber, secondNumber, operator);
// document.write("The result of " + firstNumber + " " + operator + " " + secondNumber + " is: " + result);

//              .... QUESTION 5 ....
// function squareNumber(num) {
//     return num * num;
// }
// var number = prompt("Enter a number to square:");
// var result = squareNumber(number);
// document.write("The square of " + number + " is: " + result);

//              .... QUESTION 6 ....
// function factorial(num) {
//     if (num < 0) {
//         return "Factorial is not defined for negative numbers.";
//     } else if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         var result = 1;
//         for (var i = 2; i <= num; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }
// var number = parseInt(prompt("Enter a number to compute its factorial:"));
// var result = factorial(number);
// document.write("The factorial of " + number + " is: " + result);

//              .... QUESTION 7 ....
// function displayCounting(start, end) {
//     if (start > end) {
//         document.write("Invalid input: Start number should be less than or equal to end number.");
//     } else {
//         for (var i = start; i <= end; i++) {
//             document.write(i + "<br>");
//         }
//     }
// }
// var startNumber = parseInt(prompt("Enter the start number:"));
// var endNumber = parseInt(prompt("Enter the end number:"));
// displayCounting(startNumber, endNumber);

//              .... QUESTION 8 ....
// function calculateHypotenuse(base, perpendicular) {
//     function square(num) {
//         return num * num;
//     }
//     var hypotenuse = Math.sqrt(square(base) + square(perpendicular));
    
//     return hypotenuse;
// }
// var base = parseFloat(prompt("Enter the base of the triangle:"));
// var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));
// var hypotenuse = calculateHypotenuse(base, perpendicular);
// document.write("The hypotenuse of the triangle is: " + hypotenuse.toFixed(2));

//          .... QUESTION 9 ....
// function calculateArea(width, height) {
//     return width * height;
// }
// var area1 = calculateArea(5, 10);
// document.write("Area of rectangle (Arguments as values): " + area1 + "<br>");
// var width = 8;
// var height = 12;
// var area2 = calculateArea(width, height);
// document.write("Area of rectangle (Arguments as variables): " + area2);

//            .... QUESTION 10 ....
// function isPalindrome(str) {
//     var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     var reversedStr = cleanedStr.split('').reverse().join('');
//     if (cleanedStr === reversedStr) {
//         return true;
//     } else {
//         return false;
//     }
// }
// var word = prompt("Enter a word to check if it's a palindrome:");
// if (isPalindrome(word)) {
//     alert(word + " is a palindrome.");
// } else {
//     alert(word + " is not a palindrome.");
// }


//             .... QUESTION 11 ....
// function capitalizeFirstLetterOfEachWord(str) {
//     var words = str.split(' ');
//     var capitalizedWords = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(' ');
// }
// var inputString = 'the quick brown fox';
// var outputString = capitalizeFirstLetterOfEachWord(inputString);
// alert("Input String: " + inputString + "\nExpected Output: " + outputString);



//          .... QUESTION 12 ....
// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }
//     return longestWord;
// }
// var inputString = 'WEB DEVELOPMENT TUTORIAL';
// var outputWord = findLongestWord(inputString);
// alert("Input String: " + inputString + "\nLongest Word: " + outputWord);


//        .... QUESTION 13 ....
function countLetterOccurrences(str, letter) {
    let count = 0;
    str = str.toLowerCase();
    letter = letter.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count; 
}
const inputString = 'JSResourceS.com';
const inputLetter = 'o';
const occurrences = countLetterOccurrences(inputString, inputLetter);
alert(`The letter '${inputLetter}' occurs ${occurrences} time(s) in the string '${inputString}'.`);
