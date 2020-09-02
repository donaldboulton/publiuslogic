import Img from 'gatsby-image'
import styled from 'styled-components'

export { Img }

export const Thumbnail = styled(Img)`
  border-radius: ${props => props.theme.mediumBorderRadius};
  transition: 0.3s;
  height: 100%;
  :hover {
    transform: scale(1.05);
  }
`
export const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
}
`
export const ImageItem = styled.div`
  :nth-child(5n) {
  grid-column-end: span 2;
}
`