import styled, { keyframes } from 'styled-components'
const barHeight = 1.7

const AppBarRaw = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  background-color: #000000ca;
  height: ${barHeight}rem;
  backdrop-filter: blur(4.5px);
`

const scrollGradient = keyframes`
  0%   { background-position: 0%   33% }
  50%  { background-position: 100% 68% }
  100% { background-position: 0%   33% }
`

const Logo = styled.h4`
  background: linear-gradient(247deg, #ed1a1a, #ef00ff, #00b9ff);
  background-size: 600% 600%;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${scrollGradient} 15s ease infinite;
`

export const AppBar = () => {
  return <>
    <AppBarRaw>
      <Logo>lastgram.</Logo>
    </AppBarRaw>
  </>
}

export const BarPad = styled.div`
  margin-top: ${(barHeight * 2) * 1.3}rem;
`