import React, { Component } from 'react'
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
        <body itemScope itemType='https://schema.org/WebSite'>
          <meta className='u-url' itemProp='url' content='{url}' />
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            
          />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      <!-- Google Tag Manager (noscript) -->
                      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLCMLLP"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                      <!-- End Google Tag Manager (noscript) -->
                    `,
            }}
          />
        </body>
      </html>
    )
  }
}
