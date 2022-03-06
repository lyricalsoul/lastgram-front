import styled, { css } from 'styled-components'

export const Heading = styled.h1`
  text-align: ${props => props.align ?? 'center'};
`
export const Subheading = styled.h3`
  text-align: ${props => props.align ?? 'center'};
`
export const Paragraph = styled.p`
  text-align: ${props => props.align ?? 'center'};
`

export const Code = styled.code`
  text-align: ${props => props.align ?? 'center'};
  background-color: #505050;
`