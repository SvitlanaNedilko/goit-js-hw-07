const inputEl = document.querySelector('#validation-input')
const maxLenght = parseInt(inputEl.dataset.length)

inputEl.addEventListener('focus', onInputFocus)
inputEl.addEventListener('blur', onInputBlur)

function onInputFocus() {
  inputEl.classList.remove(...inputEl.classList)
}

function onInputBlur(event) {
  const inputLenght = event.currentTarget.value.length

  // if (inputLenght === maxLenght) {
  //   inputEl.classList.add('valid')
  // } else {
  //   inputEl.classList.add('invalid')
  // }

  // inputLenght === maxLenght
  //   ? inputEl.classList.add('valid')
  //   : inputEl.classList.add('invalid')

  inputEl.classList.add(inputLenght === maxLenght ? 'valid' : 'invalid')
}
