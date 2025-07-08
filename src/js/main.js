// Select the button
const button = document.querySelector('button')
//Select the body
const body = document.querySelector('body')

button.addEventListener('click', e => {
  body.classList.toggle('offsite-is-open')
})