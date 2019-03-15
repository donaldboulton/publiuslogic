import React, {Component} from 'react'
import favicon from './assets/img/favicon.ico'
require('typeface-kaushan-script')

export default class HTML extends Component {
  render () {
    return (
      <html lang='en' className='has-navbar-fixed-top'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: this.props.body}}
            
          />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.onload=function () {
                var form = document.getElementById('newsletter')
                form.addEventListener('submit', function (e) {
                  e.preventDefault()
                  var email = document.getElementById('inputEmail').value
                  submitEmail(email)
                })
              }

              function submitEmail(email) {
              fetch('/.netlify/functions/Newsletter', {
                method: 'post',
                body: JSON.stringify({
                email: email
              })
              }).then(function(response) {
                return response.json();
              }).then(function(data) {
                  console.log('data from function', data);
                  var messageDiv = document.getElementById('message');
                  messageDiv.innerText = 'Email added via Netlify functions & AJAX!';
                });
              }
              window.onscroll = function() {
                scrollFunction();
              };
 
              function scrollFunction() {
              if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
              document.getElementById('toTop').style.display = 'block';
              } else {
                document.getElementById('toTop').style.display = 'none';
                }
              }
 
              function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }            
              `
            }}
          />
        </body>
      </html>
    )
  }
}
