window.onscroll = function () { myFunction() }

// Get the toc
var toc = document.getElementById('toc')

// Get the offset position of the toc
var sticky = toc.offsetTop

// Add the sticky class to the toc when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction () {
  if (window.pageYOffset >= sticky) {
    toc.classList.add('sticky')
  } else {
    toc.classList.remove('sticky')
  }
}
