import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import SearchBox from '../SearchBox'
import logo from '../../img/site-logo250x80.png'
import rss from '../../img/rss.svg'
import NetlifyIdentityWidget from '../IdentityWidget'

const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <span className='navbar-item'>
            <Link to='/' className='navbar-item'>
              <img src={logo} alt='Publiuslogic' />
            </Link>
          </span>
          <button
            className={`button is-primary navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>
          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link  is-active' href='/'>
                 Docs
              </a>
              <div className='navbar-dropdown'>
                <a className='navbar-item ' href='/'>
                 Home
                </a>
                <a className='navbar-item ' href='/about'>
                 About
                </a>
                <a className='navbar-item is-active' href='/pricing'>
                  Pricing
                </a>
                <a className='navbar-item ' href='/contact'>
                  Contact
                </a>
                <a className='navbar-item ' href='/privacy'>
                  Privacy & terms
                </a>
              </div>
            </div>
            <div className='navbar-item has-dropdown is-hoverable is-mega'>
              <div className='navbar-link'>
                    Blog
              </div>
              <div id='blogDropdown' className='navbar-dropdown ' data-style='width: 18rem;'>
                <div className='container is-fluid'>
                  <div className='columns'>
                    <div className='column'>
                      <h1 className='title is-6 is-mega-menu-title'>Blog Posts</h1>
                      <div className='navbar-content'>
                        <div className='navbar-item'>
                          <small className='has-text-light'>03 March 2019</small>
                        </div>
                        <div className='navbar-item'>
                          <a className='navbar-item' href='/blog'>Blog</a>
                        </div>
                      </div>
                      <div className='navbar-content'>
                        <div className='navbar-item'>
                          <small className='has-text-light'>10 March 2019</small>
                        </div>
                        <p className='navbar-item'><a href='/blog/just-in-small-batch-of-jamaican-blue-mountain-in-store-next-week/'>Jamaican Blue Mountain </a></p>
                      </div>
                      <div className='navbar-content'>
                        <div className='navbar-item'>
                          <small className='has-text-light'>03 March 2019</small>
                        </div>
                        <p className='navbar-item'><a href='/blog/making-sense-of-the-scaas-new-flavor-wheel/'>SCAA’s new Flavor Wheel</a></p>
                      </div>
                    </div>
                    <div className='column'>
                      <h1 className='title is-6 is-mega-menu-title'>Bulma Resources </h1>
                      <div className='navbar-content'>
                        <div className='navbar-item'>
                          <small className='clhas-text-light'>03 March 2019</small>
                        </div>
                        <p className='navbar-item'><a href='https://bulma.io/documentation/'>Bulma.io</a></p>
                      </div>
                      <a className='navbar-item' href='https://bulma.io/documentation/overview/start/'>
                                 Overview
                      </a>
                      <a className='navbar-item' href='https://bulma.io/documentation/modifiers/syntax/'>
                                 Modifiers
                      </a>
                      <a className='navbar-item' href='http://bulma.io/documentation/columns/basics/'>
                                 Columns
                      </a>
                    </div>
                    <div className='column'>
                      <h1 className='title is-6 is-mega-menu-title'>Mega Menu Test</h1>
                      <a className='navbar-item' href='/2017/08/03/list-of-tags/'>
                        <div className='navbar-content'>
                          <p>
                            <small className='clhas-text-light'>03 Aug 2017</small>
                          </p>
                          <p>New feature: list of tags</p>
                        </div>
                      </a>
                      <a className='navbar-item' href='/2017/08/03/list-of-tags/'>
                        <div className='navbar-content'>
                          <p>
                            <small className='clhas-text-light'>03 Aug 2017</small>
                          </p>
                          <p>New feature: list of tags</p>
                        </div>
                      </a>
                      <a className='navbar-item' href='/2017/08/03/list-of-tags/'>
                        <div className='navbar-content'>
                          <p>
                            <small className='clhas-text-light'>03 Aug 2017</small>
                          </p>
                          <p>New feature: list of tags</p>
                        </div>
                      </a>

                    </div>
                    <div className='column'>
                      <h1 className='title is-6 is-mega-menu-title'>Syntax</h1>
                      <a className='navbar-item ' href='/documentation/overview/start/'>
                        Overview
                      </a>
                      <a className='navbar-item ' href='https://bulma.io/documentation/modifiers/syntax/'>
                        Modifiers
                      </a>
                      <a className='navbar-item ' href='https://bulma.io/documentation/columns/basics/'>
                        Columns
                      </a>
                      <a className='navbar-item ' href='https://bulma.io/documentation/layout/container/'>
                        Layout
                      </a>
                    </div>
                  </div>
                </div>
                <hr className='navbar-divider' />
                <div className='navbar-item'>
                  <div className='navbar-content'>
                    <div className='level is-mobile'>
                      <div className='level-left'>
                        <div className='level-item'>
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className='level-right'>
                        <div className='level-item'>
                          <a className='button bd-is-rss is-small' href='http://publiuslogic.com/rss.xml'>
                            <span className='icon is-small'>
                              <img src={rss} alt='Publiuslogic' style={{ width: '16px' }} />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='navbar-item site-title' id='login'>
              <NetlifyIdentityWidget />
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
