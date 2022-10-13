class Counter {
  constructor(displayTextElement){
    this.displayTextElement = displayTextElement
    this.reset()
  }

  reset() {

  }

  increase() {

  }

  decrease() {

  }
}

// variables needed

const increaseButton = document.querySelector('.increase')
const decreaseButton = document.querySelector('.decrease')
const displayTextElement = document.querySelector('.display')

const counter = new Counter(displayTextElement)

// event listeners for both buttons

increaseButton.addEventListener('click', () => {

})
