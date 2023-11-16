document.addEventListener("DOMContentLoaded", function() {
  const screen = document.querySelector('.screen');
  const clearBtn = document.querySelector('.clear');
  const equalsBtn = document.querySelector('.equals');
  const numberBtns = document.querySelectorAll('.ops span:not(.operator)');
  const operatorBtns = document.querySelectorAll('.operator');

  let currentInput = '';
  let currentOperator = '';

  numberBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      currentInput += btn.textContent;
      updateScreen();
    });
  });

  operatorBtns.forEach(function(operator) {
    operator.addEventListener('click', function() {
      if (currentOperator !== '') {
        calculate();
      }
      currentOperator = operator.textContent;
      currentInput += currentOperator;
      updateScreen();
    });
  });

  equalsBtn.addEventListener('click', function() {
    calculate();
  });

  clearBtn.addEventListener('click', function() {
    currentInput = '';
    currentOperator = '';
    updateScreen();
  });

  function updateScreen() {
    screen.textContent = currentInput;
  }

  function calculate() {
    const operators = ['+', '-', '÷', '×'];
    let parts = currentInput.match(/(\d+|\D)/g);
    if (parts) {
      parts = parts.map(function(part) {
        return operators.includes(part) ? part : parseFloat(part);
      });

      for (let i = 0; i < operators.length; i++) {
        while (parts.indexOf(operators[i]) !== -1) {
          const operatorIndex = parts.indexOf(operators[i]);
          const result = performOperation(parts[operatorIndex - 1], parts[operatorIndex + 1], operators[i]);
          parts.splice(operatorIndex - 1, 3, result);
        }
      }

      currentInput = parts[0].toString();
      currentOperator = '';
      updateScreen();
    }
  }

  function performOperation(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '÷':
        return num1 / num2;
      case '×':
        return num1 * num2;
      default:
        return 0;
    }
  }
});