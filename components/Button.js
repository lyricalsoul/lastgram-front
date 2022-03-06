import styled, { css } from 'styled-components'

const VelvetButton = styled.button`
  background-color: ${props => props.ghost ? 'transparent' : (props.color || props.theme.colors?.primary || '#ff0000')};
  color: ${props => props.textColor || props.theme.colors?.textColor || '#ffffff'};
  border: ${props => props.ghost ? ('0.16rem solid '+ (props.color || props.theme.colors?.primary || '#ff0000')) : 'none'};
  border-radius: 1.2rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  padding: 8px 20px;
  transition-duration: 0.4s;
  
  &:hover {
    background-color: ${props => props.ghost ? props.color || props.theme.colors?.primary : '#ffffff'};
    color: ${props => props.ghost ? (props.textColor || props.theme.colors?.textColor || '#ffffff') : '#000000'};
    box-shadow: 0px 6px 20px ${props => props.lightUp ? (props.ghost ? (props.color || props.theme.colors?.primary || '#ff0000') : '#ffffff') : 'transparent'};
  }
`

export default (props) => {
  const launchTab = () => window.open(props.href, '_blank')
  const goToTab = () => {
    window.location.href = props.href
  }
  
  if (props.href) {
    if (props.launchTab) return <VelvetButton {...props} onClick={launchTab} />
    else <VelvetButton {...props} onClick={goToTab} />
  }
  
  return <VelvetButton {...props} />
}