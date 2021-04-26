const inputEl = document.querySelector('#font-size-control')
inputEl.addEventListener('input', onInput)

const textEl = document.querySelector('#text')

function onInput() {
  textEl.style.fontSize = `${inputEl.value}px`
}
