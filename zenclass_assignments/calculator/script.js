document.addEventListener("DOMContentLoaded", function () {
  const resultInput = document.getElementById("result");
  const buttons = document.querySelectorAll(".number-btn, .operator-btn");
  const equalButton = document.getElementById("equal-btn");
  const clearButton = document.getElementById("clear-btn");

  let currentExpression = "";

  function calculate(expression) {
    try {
      return eval(expression);
    } catch (error) {
      return "Error";
    }
  }

  function updateResult() {
    resultInput.value = currentExpression;
  }

  function handleButtonClick(e) {
    const value = e.target.getAttribute("data-value");
    if (!isNaN(parseInt(value)) || value === "." || value === "%") {
      currentExpression += value;
    } else if (value === "=") {
      const result = calculate(currentExpression);
      currentExpression = result.toString();
    } else if (value === "C") {
      currentExpression = "";
    } else {
      alert("Only numbers are allowed.");
    }
    updateResult();
  }

  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });

  // Handle keyboard events
  document.addEventListener("keydown", (e) => {
    const keyValue = e.key;
    if (/[\d.%/*\-+=]|Enter/.test(keyValue)) {
      e.preventDefault();
      const value = keyValue === "Enter" ? "=" : keyValue;
      handleButtonClick({ target: { getAttribute: () => value } });
    } else if (keyValue === "Backspace") {
      e.preventDefault();
      currentExpression = currentExpression.slice(0, -1);
      updateResult();
    } else if (keyValue === "Escape") {
      e.preventDefault();
      currentExpression = "";
      updateResult();
    } else {
      alert("Only numbers are allowed.");
    }
  });
});
