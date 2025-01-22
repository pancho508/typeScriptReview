var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var addButton = document.getElementById('addButton');
var resultDiv = document.getElementById('result');
function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        // throw new Error('Invalid input');
        return +n1 + +n2;
    }
    else {
        return n1 + n2;
    }
}
// Attach event listener to button
addButton.addEventListener('click', function () {
    // Parse the input values
    var n1 = parseFloat(num1Input.value) || 0;
    var n2 = parseFloat(num2Input.value) || 0;
    // Calculate the sum
    var sum = add(n1, n2);
    // Display the result
    resultDiv.textContent = "Result: ".concat(sum);
});
