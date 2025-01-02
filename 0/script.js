// Get references to DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('addButton');
const resultDiv = document.getElementById('result');

// Attach event listener to button
addButton.addEventListener('click', () => {
  // Parse the input values
  const n1 = parseFloat(num1Input.value) || 0;
  const n2 = parseFloat(num2Input.value) || 0;

  // Calculate the sum
  const sum = n1 + n2;

  // Display the result
  resultDiv.textContent = `Result: ${sum}`;
});
