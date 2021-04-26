const list = document.querySelectorAll('.item')
console.log(`В списке ${list.length} категории.`)
for (const item of list) {
  console.log(`Категория: ${item.children[0].textContent}`)
  console.log(`Количество элементов: ${item.children[1].children.length}`)
}
