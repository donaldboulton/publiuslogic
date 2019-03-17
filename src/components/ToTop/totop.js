window.onscroll = function () {
  scrollFunction()
}

function scrollFunction () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
    document.getElementById('toTop').style.display = 'block'
  } else {
    document.getElementById('toTop').style.display = 'none'
  }
}

function topFunction () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}            