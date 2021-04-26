const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

// const makeImageCard = ({ url, alt }) => {
//   const itemEl = document.createElement('li')
//   const imageEl = document.createElement('img')
//   imageEl.setAttribute('src', url)
//   imageEl.setAttribute('alt', alt)

//   itemEl.append(imageEl)

//   // console.log(itemEl)

//   return itemEl
// }

// const elements = images.map(makeImageCard)

// console.log(elements)

// const gellary = document.querySelector('#gallery')
// gellary.append(...elements)

const gallery = document.querySelector('#gallery')

const elements = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src=${url} alt=${alt} class="gallery-image"></li>`
  )
  .join('')

gallery.insertAdjacentHTML('afterbegin', elements)
