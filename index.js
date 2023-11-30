const allButtons = document.querySelectorAll("button");

const inputField = document.getElementById("result");

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", () => {
    const buttonValue = allButtons[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputField.value = "";
}

function calculateResult() {
  inputField.value = eval(inputField.value);
}

function appendValue(buttonValue) {
  inputField.value += buttonValue;
}
