const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

const list = document.querySelector('#ingredients')

const newElements = ingredients.map((item) => {
  const element = document.createElement('li')
  element.textContent = item
  return element
})

list.append(...newElements)
