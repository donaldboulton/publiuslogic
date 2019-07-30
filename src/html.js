import React, { Component } from 'react'
import 'babel-polyfill'
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
          <meta name='google-site-verification' content='i-TtqKB3U2OVB1KJRxagbBOxGtUrX-AqNP3ihqr6CN4' />
          <meta name='geo.placename' content='720 S Rockwell Ave, Oklahoma City, OK 73128, USA' />
          <meta name='geo.position' content='35.4582062;-97.6338859' />
          <meta name='geo.region' content='US-Oklahoma' />
          <meta name='ICBM' content='35.4582062, -97.6338859' />
          <meta name='slack-app-id' content='AGT7BS79R' />
          <meta name='robots' content='index, follow' />
          <meta name='msapplication-TileColor' content='#d64000' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:site_name' content='publiuslogic.com' />
          <meta property='og:see_also' content='https://github.com/donaldboulton' />
          <meta property='og:see_also' content='https://youtube.de/donboulton' />
          <meta property='og:see_also' content='https://twitter.com/donboulton' />
          <link rel='apple-touch-icon' href='/img/apple-touch-icon-180x180.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/img/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/img/favicon-16x16.png' />
          <link rel='mask-icon' href='/img/safari-pinned-tab.svg' color='#d64000' />
          <link type='text/plain' href='https//publiuslogic.com/humans.txt' rel='author' />
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
