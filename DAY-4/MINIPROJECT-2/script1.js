var displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").textContent = displayValue;
}

function calculate() {
  try {
    var result = eval(displayValue);
    document.getElementById("display").textContent = result;
    displayValue = "";
  } catch (error) {
    document.getElementById("display").textContent = "Error";
  }
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").textContent = "";
}
