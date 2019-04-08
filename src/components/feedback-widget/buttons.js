import styled, { css } from 'styled-components'

const buttonStyles = css`
  background: #d64000;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 1px 1px 6px #33333344;
  color: white;
  font-size: 14px;
  font-family: sans-serif;
  padding: 0.25rem 0.5rem;
  z-index: 1;
  -webkit-appearance: none;

  &:disabled {
    opacity: 0.5;
  }
`

export const OpenButton = styled('button')`
  ${buttonStyles};
  display: block;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`

export const SubmitButton = styled('button')`
  ${buttonStyles};
  margin-right: 0.5rem;
`

export const CloseButton = styled('button')`
  ${buttonStyles};
  background: #ddd;
  box-shadow: none;
  color: #000000;
  margin: 0.5rem 0;
`
