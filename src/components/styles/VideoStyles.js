import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

export const VideoPlayer = styled.div`
  ${mediaQuery.minPhablet} {
    > p {
      text-align: center;
    }
  }
`
export const Iframe = styled.div`
  width: 100%;
  height: 580px;
  ${mediaQuery.minDesktopSmall} {
    height: 480px;
  }
  ${mediaQuery.minLaptop} {
     height: 380px;
  }
  ${mediaQuery.minPhablet} {
     height: 250px;
  }
  ${mediaQuery.minPhone} {
     height: 230px;
  }
`
