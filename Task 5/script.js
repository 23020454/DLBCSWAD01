// script.js

// Select DOM elements
const number1Field = document.getElementById('number1');
const number2Field = document.getElementById('number2');
const resultParagraph = document.getElementById('result');
const calcButton = document.getElementById('calcButton');

// Event listener for the Calculate button
calcButton.addEventListener('click', () => {
  // Parse input values as numbers
  const num1 = parseFloat(number1Field.value) || 0;
  const num2 = parseFloat(number2Field.value) || 0;

  // Perform the sum
  const sum = num1 + num2;

  // Display the result
  resultParagraph.textContent = `The sum is: ${sum}`;
  console.log(`The sum is: ${sum}`);
});