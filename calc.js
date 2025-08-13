const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "AC") {
      // Clear everything
      expression = "";
      display.value = "";
    } else if (value === "=") {
      try {
        // Evaluate the expression safely
        const result = eval(expression);
        display.value = result;
        expression = result.toString(); // Allow chaining further calculations
      } catch (error) {
        display.value = "Error";
        expression = "";
      }
    } else if (value === "+/-") {
      // Toggle sign if expression is a number
      if (expression && !isNaN(expression)) {
        expression = (-parseFloat(expression)).toString();
        display.value = expression;
      }
    } else {
      // Append clicked value to expression
      expression += value;
      display.value = expression;
    }
  });
});
