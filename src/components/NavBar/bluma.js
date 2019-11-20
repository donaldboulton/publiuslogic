const dropdown = document.querySelector('.dropdown')
dropdown.addEventListener('click', function (event) {
  event.stopPropagation()
  dropdown.classList.toggle('is-active')
})
