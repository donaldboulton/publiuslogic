import { styled, Img } from 'styled-components'

export const Image = styled(Img)`
  border-radius: ${props => props.theme.mediumBorderRadius};
  transition: ${props => props.theme.shortTrans};
  height: 100%;
  :hover {
    transform: scale(1.05);
  }
`