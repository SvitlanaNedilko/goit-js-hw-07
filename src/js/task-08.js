const inputEl = document.querySelector('input')
const renderBtn = document.querySelector('[data-action=render]')
const destroyBtn = document.querySelector('[data-action=destroy]')
const boxesEl = document.querySelector('#boxes')

renderBtn.addEventListener('click', onCreate)

destroyBtn.addEventListener('click', destroyBoxes)

function onCreate() {
  createBoxes(parseInt(inputEl.value))
}

function destroyBoxes() {
  boxesEl.innerHTML = ''
}

function createBoxes(amount) {
  const result = []
  for (let i = 1; i <= parseInt(inputEl.value); i += 1) {
    result.push(document.createElement('div'))
  }

  result.map((element, index) => {
    const r = getRandomInt(0, 256)
    const g = getRandomInt(0, 256)
    const b = getRandomInt(0, 256)
    element.style.backgroundColor = `rgb(${r},${g},${b})`

    element.style.height = `${30 + index * 10}px`
    element.style.width = `${30 + index * 10}px`
  })
  boxesEl.append(...result)
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
