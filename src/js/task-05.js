const inputEl = document.querySelector('#name-input')
const textEl = document.querySelector('#name-output')
console.log(inputEl)

inputEl.addEventListener('input', onTextInput)

function onTextInput(event) {
  const value = event.target.value
  // if (value === '') {
  //   textEl.textContent = 'незнакомец'
  // } else {
  //   textEl.textContent = value
  // }

  textEl.textContent = value === '' ? 'незнакомец' : value
}
