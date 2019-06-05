import styled, { keyframes } from 'styled-components';

// Animations
const glow = keyframes`
  0% {
    border: 2px solid lightGray;
  }
  50% {
    transform: scale(1.1);
    border: 5px solid aquamarine;
  }
  100% {
    border: 2px solid lightGray;
  }
`

// Styled Components
export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const FormContainer = styled.form`
    width: 35%;
    height: 65%;
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    animation: ${glow} 2s infinite;
`

export const FormInput = styled.input.attrs({
  placeholder: props => props.email ? 'email' : 'password',
  type: props => props.email ? 'email' : 'password'
})`
    width: 80%;
    height: 8%;
`

export const FormBtn = styled.button`
    width: 25%;
    height: 10%;
    background: ${props => props.register ? 'pink' : 'aquamarine'};
    color: white;
    border: none;
    &:hover {
      background: ${props => props.register ? 'red' : 'aqua'};
      cursor: pointer;
    }
`

export const ThemeSwitcherBtn = styled.button`
    width: 25%;
    height: 10%;
    background: ${props => props.register ? 'pink' : 'aquamarine'};
    color: white;
    border: none;
`