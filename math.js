function appendValue(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);  // Evaluate the mathematical expression
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error'; // Handles invalid inputs
    }
}