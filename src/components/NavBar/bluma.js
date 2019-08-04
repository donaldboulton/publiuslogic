document.addEventListener('DOMContentLoaded', function () {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        const target = $el.dataset.target
        const $target = document.getElementById(target)
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
})
let dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function (event) {
  event.stopPropagation()
  dropdown.classList.toggle('is-active')
})
