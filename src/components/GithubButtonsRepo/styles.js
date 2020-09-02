import styled from 'styled-components'
import mediaQuery from './../../utils/mediaQuery'

export const GithubButtonsWrapper = styled.div`
  padding: 2vh 1vw;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  grid-template-areas:
    'sponsor'
    'issues'
    'follow'
    'watch'
    'star'
    'fork';
  grid-gap: 2vh 1vw;
  ${mediaQuery.minPhone} {
    grid-template-areas:
      'sponsor issues follow'
      'watch star fork';
  }
  ${mediaQuery.minDesktopArea} {
    grid-template-areas: 
      'sponsor issues follow watch star fork';
  }
  ${mediaQuery.minDesktop} {
    grid-template-areas: 
      'sponsor issues follow watch'
      'star fork';
  }
`

