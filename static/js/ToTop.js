window.onload=function () {
  var form = document.getElementById('newsletter')
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    var email = document.getElementById('inputEmail').value
    submitEmail(email)
  })
}

function submitEmail (email) {
  fetch('/.netlify/functions/Newsletter', {
    method: 'post',
    body: JSON.stringify({
      email: email,
    }),
  }).then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log('data from function', data)
    var messageDiv = document.getElementById('message')
    messageDiv.innerText = 'Email added via Netlify functions & AJAX!'
  })
}
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', user => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/'
      })
    }
  })
}

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
