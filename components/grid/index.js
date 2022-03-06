import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  padding: 1rem;
  
  @media (min-width: 40rem) {
    width: 50%;
  }
  
  @media (min-width: 56rem) {
    width: 33.33333%
  }
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;
`
