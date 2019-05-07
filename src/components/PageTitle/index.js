import React, { useRef, useEffect } from 'react'
import { Caption } from '../styles/Caption'
import { PageTitleContainer, Title, Img } from './styles'
import img from 'gatsby-image'

const PageTitle = ({ children, credit, caption, location, backdrop, className, fillToBottom }) => {
  const ref = useRef()
  if (fillToBottom) {
    const fillAvailHeight = () =>
      (ref.current.style.height =
        window.innerHeight - ref.current.offsetTop + `px`)
    useEffect(() => {
      fillAvailHeight()
      window.addEventListener(`resize`, fillAvailHeight)
      return () => window.removeEventListener(`resize`, fillAvailHeight)
    })
  }
  return (
    <PageTitleContainer ref={ref} className={className}>
      <Img {...img} />
      <Title backdrop={backdrop || (img && img.backdrop)}>{children}</Title>
      {img && (img.caption || img.credit) && (
        <Caption showOnHoverParent={PageTitleContainer}>
          <span dangerouslySetInnerHTML={{ __html: caption }} />
          {caption && credit && ` | `}
          {credit && (
            <span>
              Credit: <a href={location}>{credit}</a>
            </span>
          )}
        </Caption>
      )}
    </PageTitleContainer>
  )
}

export default PageTitle
