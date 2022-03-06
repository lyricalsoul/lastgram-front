import styled, { keyframes, css } from 'styled-components'

const loadingAnim = keyframes`
  0%   { background-position: 100% 0%; }
  100% { background-position: 0%   0%; }
`

const Skeleton = styled.div`
  background-color: #fafafa;
  width: ${props => props.size || props.width};
  height: ${props => props.size || props.height};
  background-size: 300% 100%;
  animation: ${loadingAnim} 2s linear infinite;
  background-image: linear-gradient(90deg, ${props => props.theme.darkMode ? '#292929, #404040, #292929, #404040' : '#fafafa, #f4f4f4, #fafafa, #f4f4f4'});
  clip-path: ${props => props.clipPath ?? 'none'};
`

export default Skeleton