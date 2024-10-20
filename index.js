//  1 Alert Chapter//

// The alert() function in JavaScript is used to display an alert box that contains a specified message and an "OK" button. This is often used for displaying simple messages or notifications to users.

// question: 2//

alert("Welcome to my website!");

// question:3//

// If you capitalize the alert keyword (e.g., Alert("Welcome to my website!")) JavaScript will throw an error because JavaScript is case-sensitive. The correct keyword is lowercase alert, and any capitalization will result in an undefined function.

// question:4  JavaScript syntax to display//

alert("Hello, world!");

// question:5//

// alert: This is the built-in JavaScript function that displays an alert box.
// ("This is an alert message!"): The parentheses () are used to pass arguments (in this case, a string message) to the alert function. The string "This is an alert message!" is what will be displayed in the alert box.
// ;: The semicolon ; indicates the end of the statement, which is optional in JavaScript but recommended for clarity.
// By using the alert() function, the user sees a dialog box that pauses the script until the user dismisses the alert by clicking "OK."

//  chapter :2 Variables for Strings question :1//

var message = "Hello, world!";
alert(message);

// question:2//

var age;
age = 25;
alert(age);

// question: 3//

var greeting = "Good morning!";
alert(greeting);

greeting = "Good evening!";
alert(greeting);

//  question:4//

var favoriteColor = "blue";
alert("My favorite color is " + favoriteColor);

// question: 5//
var age= 
age = 25;
alert(age);

// 3.Variables for Numbers //
//   question:1//

var height = 170;
var newHeight = height + 10;
alert(newHeight);

//  question:2//
var num1 = 50;
var num2 = 30;
var sum = num1 + num2;
alert(sum);

// question:3//
var numToBeAdded = 20;
var total = numToBeAdded; // Assuming total is assigned the value of numToBeAdded
alert(total);

// question:4//
// Declare the variable price with a value of 120
var price = 120;

// Calculate the tax (10% of price)
var tax = price * 0.10;

// Calculate the total price
var totalPrice = price + tax;

// Display the total price in an alert
alert("The total price after tax is: " + totalPrice);

// 4.Variables for Numbers//

// question:1//
var myCityName = "karachi"; 

// Display the value in an alert
alert("My city name is: " + myCityName);

// question:2//
var userName = "nehaabbasi"; // Replace with actual user name
var userEmail = "nehaabbasi@gmail.com"; // Replace with actual user email
var userPassword = "securePassword123"; // Replace with actual user password

// Display the values in an alert
alert("User Name: " + userName + "\nUser Email: " + userEmail + "\nUser Password: " + userPassword);

// question: 3//
// This will cause a syntax error
var userAddress = "123 Main St"; // Invalid variable name
// Correctly declare the variable using camelCase
var userAddress = "123 Main St"; 
alert("User Address: " + userAddress);

// question: 4//
var rose = "Floribundas";

// Try accessing the variable using uppercase
var uppercaseRose; // This will be undefined since "Rose" is not defined

// Display both results
alert("Value of rose: " + rose + "\nValue of Rose: " + uppercaseRose);


// 5.Math expressions: Familiar operators//
//  question no 1//
let ADD = 25 + 30;
alert(ADD);

// question no2//
let numOne = 25;
let numTwo = 5;
let addOn = numOne + numTwo;
alert(addOn);

// question no 3//
let modulusResult = 27 % 4;
alert(modulusResult);

//6.Math expressions: Unfamiliar operators//
//   question no 1//
var no= 3;
var newNum= no++;
alert(no);
alert(newNum);
//  question no 2//
let counter = 10;
counter++;
counter++;
alert(counter); 

// question no 3//
let points = 20;
points--; 
++points;   
alert(points);
// question no 4//
let number = 0;
++number; 
++number; 
++number; 
alert(number); 

// chapter no 7 Math expressions: Eliminating ambiguity//
// question no 1//
let calculation = (20 % 6) + 4 * 2;
alert(calculation); 

// question no 2//

let expressionValue = (6 + 2) * (5 - 3);
alert(expressionValue); // Displays: 16

// question no 3  and 4//
// Explanation of How Operator Precedence Applies:
// Parentheses (()): JavaScript processes the operations inside parentheses first, regardless of the standard precedence rules.
// (6 + 2) is calculated first, resulting in 8.
// (5 - 3) is calculated next, resulting in 2.
// Multiplication (*): After evaluating the parentheses, the expression becomes 8 * 2. Since there are no more parentheses, the multiplication is performed, and multiplication has a high precedence.
// Result: 8 * 2 equals 16.
// So, when you run alert(expressionValue);, it will display 16.

//  chapter :8 Prompts//
// question no 1//

let nameUser = prompt("What is your name?");
alert("Hello, " + nameUser + "!");

// question no 2//
let oldAge = prompt("How old are you?");
if ( oldAge === null) {
    alert("No age provided");
} else {
    alert("You are " +  oldAge+ " years old.");
}

// question  no 3//
let pets = prompt("How many pets do you have?");
if (pets === "") {
    alert("You didn't enter anything.");
} else {
    alert("You have " + pets + " pets.");
}
// question no 4//
let favNum = prompt("What is your favorite number?");
if (favNum === "") {
    favNum = 7; // Assign default value
}
console.log("Your favorite number is: " + favNum);

//  chapter no 9 if statements//
//  question no 1//
var country = prompt("What is the capital of France?")
if (country=== "paris") {
    console.log("correct");}
    
    else{
console.log( "Incorrect, the correct answer is Paris.");
}
// question no 2//
let answerUser = prompt("What is the capital of france?")
if (answerUser.toLowerCase() === "paris") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is Paris.");
}

// question no 3//
let userAnswer = prompt("What is the capital of the United Kingdom?");
if (userAnswer === "London" || userAnswer === "The United Kingdom") {
    alert("Correct!");
} else {
        alert("Incorrect, the correct answer is London.");}

 // question no 4//
 let score = 0; 

 let question1 = prompt("What is the capital of France?");
 if (question1.toLowerCase() === "paris") {
     score++; 
     alert("Correct! Your score is now: " + score);
 } else {
     alert("Incorrect. The correct answer is Paris.");
 }
 
 let question2 = prompt("What is 5 + 3?");
 if (question2 === "8") {
     score++; 
     alert("Correct! Your score is now: " + score);
 } else {
     alert("Incorrect. The correct answer is 8.");
 }
//  question no 5//
let answer1 = prompt("What is the capital of Germany?");
let answer2 = prompt("What is 10 + 10?");

// Convert answer2 to a number for comparison
answer2 = Number(answer2);

if (answer1.toLowerCase() === "berlin" && answer2 === 20) {
    alert("You got both right!");
} else if (answer1.toLowerCase() === "berlin" || answer2 === 20) {
    alert("You got one correct!");
} else {
    alert("You got none correct.");
}
// question  no 6//
let userInput = prompt("Enter a number:");
let number1 = number1(userInput);

if (number1 % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}
// question no 7//
let userScore = prompt("Enter your score (0-100):");
let scorenew = Number(userScore);
let grade;

if (scorenew >= 90 && scorenew <= 100) {
    grade = "A";
} else if (scorenew >= 80 && scorenew < 90) {
    grade = "B";
} else if (scorenew >= 70 && scorenew < 80) {
    grade = "C";
} else if (scorenew >= 60 && scorenew < 70) {
    grade = "D";
} else if (scorenew >= 0 && scorenew < 60) {
    grade = "F";
} else {
    alert("Invalid score. Please enter a number between 0 and 100.");
}

// question no 8//
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

let inputYear = prompt("Enter a year:");
let year = Number(inputYear);

if (isLeapYear(year)) {
    alert(year + " is a leap year.");
} else {
    alert(year + " is not a leap year.");
}
// question no 10//
function calculateFinalPrice(originalPrice) {
    let discountRate;

    // Determine the discount rate based on the original price
    if (originalPrice < 50) {
        discountRate = 0; // No discount
    } else if (originalPrice >= 50 && originalPrice <= 100) {
        discountRate = 0.10; // 10% discount
    } else {
        discountRate = 0.20; // 20% discount
    }

    // Calculate the final price
    let discountAmount = originalPrice * discountRate;
    let finalPrice = originalPrice - discountAmount;
    
    return finalPrice;
}
let userWorld = prompt("Enter the original price of the item:");
let originalPrice = Number(userInput);

if (originalPrice >= 0) {
    let finalPrice = calculateFinalPrice(originalPrice);
    alert("The final price after discount is: $" + finalPrice.toFixed(2));
} else {
    alert("Please enter a valid price.");
}
// question  no 9//
// Function to find the largest of three numbers
function findLargestNumber(num1, num2, num3) {
    let largest;

    if (num1 >= num2 && num1 >= num3) {
        largest = num1; // num1 is the largest
    } else if (num2 >= num1 && num2 >= num3) {
        largest = num2; // num2 is the largest
    } else {
        largest = num3; // num3 is the largest
    }

    return largest;
}

let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");
let input3 = prompt("Enter the third number:");

// Convert inputs to numbers
let number0 = Number(input1);
let number2 = Number(input2);
let number3 = Number(input3);


if (!isNaN(number0) && !isNaN(number2) && !isNaN(number3)) {
    let largestNumber = findLargestNumber(number1, number2, number3);
    alert("The largest number is: " + largestNumber);
} else {
    alert("Please enter valid numbers.");
}




