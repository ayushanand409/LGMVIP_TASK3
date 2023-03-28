let result = document.getElementById('result');

function append(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}


function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate(operator) {
  let expression = result.value;
  let lastChar = expression.charAt(expression.length - 1);

  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '%') {
    expression = expression.slice(0, -1);
  }

  result.value = eval(expression) + operator;
}

const audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3');
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});