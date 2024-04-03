function appendToDisplay(value) {
  document.getElementById('display').textContent += value;
}

function clearDisplay() {
document.getElementById('display').textContent = '';
}

function clearOne() {
var display = document.getElementById('display');
display.textContent = display.textContent.slice(0, -1);
}

function calculate() {
const expression = document.getElementById('display').textContent;
const result = eval(expression);
document.getElementById('display').textContent = result;
}