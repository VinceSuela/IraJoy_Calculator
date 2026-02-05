let screen = document.getElementById("screen");

function appendToDisplay(input) {
  const operators = ["+", "-", "*", "/", "%", "√", "."];
  let lastChar = screen.value.slice(-1);

  if (screen.value === "" && operators.includes(input) && input !== "-") {
    return;
  }
  if (operators.includes(lastChar) && operators.includes(input)) {
    screen.value = screen.value.slice(0, -1) + input;
  } else {
    screen.value += input;
  }
}

function calculate() {
  try {
    let displayValue = screen.value;
    displayValue = displayValue.replace(/(\d+)!/g, (_, num) =>
      factorial(Number(num)),
    );

    displayValue = displayValue.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

    let result = eval(displayValue);

    if (isNaN(result) || !isFinite(result)) {
      screen.value = "ERROR";
    } else {
      screen.value = result;
    }
  } catch (error) {
    screen.value = "ERROR";
  }
}

function clearDisplay() {
  try {
    if (screen.value === "" || screen.value === "0") {
      alert("Nothing to delete!");
      return;
    } else {
      screen.value = "";
    }
  } catch (error) {
    console.error("Backspace failed:", error);
    alert("An error occurred while deleting.");
  }
}

function backspace() {
  try {
    if (screen.value === "" || screen.value === "0") {
      alert("Nothing to delete!");
      return;
    }
    if (screen.value.length === 1 || screen.value === "ERROR") {
      screen.value = "";
    } else {
      screen.value = screen.value.slice(0, -1);
    }
  } catch (error) {
    console.error("Backspace failed:", error);
    alert("An error occurred while deleting.");
  }
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
