import styled from 'styled-components'

const Card = styled.div`
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 ${props => props.theme.darkMode ? 'rgba(1, 1, 1, 0)' : 'rgba(0, 0, 0, 0.2)'};
  padding: 16px;
  background-color: ${props => props.theme.darkMode ? '#101010' : '#efefef'};
`

export default Card