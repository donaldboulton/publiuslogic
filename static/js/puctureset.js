import React, { Component } from 'react'
import 'babel-polyfill'
import favicon from '../../assets/img/favicon.ico'
require('typeface-kaushan-script')
require('typeface-roboto')

export default class HTML extends Component {
  render () {
    return (
      <html lang='en' className='has-navbar-fixed-top' itemScope='itemScope' itemType='https://schema.org/WebSite'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=3.0, minimum-scale=0.86' />
          <meta name='google-site-verification' content='i-TtqKB3U2OVB1KJRxagbBOxGtUrX-AqNP3ihqr6CN4' />
          <meta name='geo.placename' content='720 S Rockwell Ave, Oklahoma City, OK 73128, USA' />
          <meta name='geo.position' content='35.4582062;-97.6338859' />
          <meta name='geo.region' content='US-Oklahoma' />
          <meta name='ICBM' content='35.4582062, -97.6338859' />
          <meta name='application-name' content='publiuslogic.com' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='slack-app-id' content='AGT7BS79R' />
          <meta name='robots' content='index, follow' />
          <meta name='msapplication-TileColor' content='#d64000' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:site_name' content='publiuslogic.com' />
          <meta property='og:see_also' content='https://github.com/donaldboulton' />
          <meta property='og:see_also' content='https://youtube.de/donboulton' />
          <meta property='og:see_also' content='https://twitter.com/donboulton' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
          <meta name='apple-mobile-web-app-title' content='publiuslogic.com' />
          <link rel='apple-touch-icon' sizes='32x32' href='/img/apple-touch-icon-32x32.png' />
          <link rel='apple-touch-icon' sizes='76x76' href='/img/apple-touch-icon-76x76.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/img/apple-touch-icon-152x152.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/img/apple-touch-icon-180x180.png' />
          <meta name='twitter:widgets:theme' content='dark' />
          <meta name='twitter:widgets:link-color' content='#d64000' />
          <meta name='twitter:widgets:border-color' content='#434040' />
          <link rel='icon' type='image/png' sizes='32x32' href='/img/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/img/favicon-16x16.png' />
          <link rel='mask-icon' href='/img/safari-pinned-tab.svg' color='#d64000' />
          <link type='text/plain' href='https//publiuslogic.com/humans.txt' rel='author' />
          {this.props.headComponents}
          <link rel='shortcut icon' href={favicon} />
        </head>
        <body itemScope='itemScope' itemType='https://schema.org/WebPage'>
          <section className='hero'>
            <div className='gatsby-image-wrapper' style='position: relative; overflow: hidden; height: 100%; width: 100%;'>
              <div style='width: 100%; padding-bottom: 24.5758%;' />
              <img src='data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHHCwM//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQABBQJ//8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQMBAT8Bh//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAABD/2gAIAQEABj8Cf//EABkQAAMAAwAAAAAAAAAAAAAAAAABIRFBYf/aAAgBAQABPyFVjmjPD//aAAwDAQACAAMAAAAQB9//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPxAj/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8Qp//EABkQAQEBAQEBAAAAAAAAAAAAAAERAEExof/aAAgBAQABPxCQJ3IUPHchbP3f/9k=' alt='' style='position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition-delay: 500ms;' />
              <picture>
                <source type='image/webp' srcSet='/images/contact350w.webp 350w, /images/contact700w.webp 700w, /images/contact1400w.webp 1400w, /images/contact1827w.webp 1827w' sizes='(max-width: 1400px) 100vw, 1400px' />
                <source srcSet='/images/contact350w.jpg 350w, /images/contact700.jpg 700w, /images/contact1400.jpg 1400w, /images/contact1827w.jpg 1827w' sizes='(max-width: 1400px) 100vw, 1400px' />
                <img sizes='(max-width: 1400px) 100vw, 1400px' srcSet='/images/contact350w.jpg 350w, /images/contact700w.jpg 700w, /images/contact1400w.jpg 1400w, /images/contact1827w.jpg 1827w' src='/images/contact.jpg' alt='' loading='lazy' style='position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 0; transition: opacity 500ms ease 0s;' />
              </picture>
              <noscript>
                <picture>
                  <source type='image/webp' srcSet='/images/contact350w.webp 350w, /images/contact.webp 700w, /images/contact.webp 1400w, /images/contact1827w.webp 1827w' sizes='(max-width: 1400px) 100vw, 1400px' />
                  <source srcSet='/images/contact350w.jpg 350w, /images/contact.jpg 700w, /images/contact.jpg 1400w, /images/contact1827w.jpg 1827w' sizes='(max-width: 1400px) 100vw, 1400px' />
                  <img loading='lazy' sizes='(max-width: 1400px) 100vw, 1400px' srcSet='/images/contact.jpg 350w, /images/contact700w.jpg 700w, /images/contact1400w.jpg 1400w, /images/contact1827w.jpg 1827w' src='/images/contact.jpg' alt='' style='position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center' />
                </picture>
              </noscript>
            </div>
          </section>
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
