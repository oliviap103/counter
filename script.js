// variables needed
let increaseButton = document.querySelector('#increase');
let decreaseButton = document.querySelector('#decrease');
let displayTextElement = document.querySelector('#display');
let count = 0;
updateDisplay();

// event listeners for both buttons
increaseButton.addEventListener('click', () => {
  count ++;
  updateDisplay();
})

decreaseButton.addEventListener('click', () => {
  count --;
  updateDisplay();
})

// functions
function updateDisplay() {
  displayTextElement.innerHTML = count;
}
