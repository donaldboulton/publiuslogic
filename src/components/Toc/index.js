import React, {ReactHTMLElement} from 'react'
import convert from 'htmr'
import {HtmrOptions} from 'htmr/lib/types'
import {Link} from 'gatsby'

export const HtmlContent = React.FunctionComponent = ({html, content, classname}) => {
  const transform = {
    a: (node: Partial<ReactHTMLElement<HTMLAnchorElement>['props']>) => {
      const {href} = node

      if(href.substr(0, 4) === 'http'){
        return <a href={href}>{node.children}</a>
      }

      return <Link to={href}>{node.children}</Link>
    }
  }

  return <div>{convert(html, { transform })}</div>
}