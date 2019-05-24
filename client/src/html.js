import React, { Component } from 'react'
import favicon from './assets/img/favicon.ico'
require('typeface-kaushan-script')
require('typeface-roboto')

export default class HTML extends Component {
  render () {
    return (
      <html lang='en' className='has-navbar-fixed-top' itemScope='itemScope' itemType='https://schema.org/WebSite'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
        </head>
        <body itemScope='itemScope' itemType='https://schema.org/WebPage'>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
            
          />
          {this.props.postBodyComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      var name = 'world';
                      console.log('Hello ' + name);
                    `,
            }}
          />
        </body>
      </html>
    )
  }
}