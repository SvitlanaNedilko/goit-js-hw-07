const decrementBtn = document.querySelector('[data-action=decrement]')
const incrementBtn = document.querySelector('[data-action=increment]')
const counterEl = document.querySelector('#value')

let counterValue = parseInt(counterEl.textContent)

decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)

function increment() {
  counterValue += 1
  counterEl.textContent = counterValue
}

function decrement() {
  counterValue -= 1
  counterEl.textContent = counterValue
}
