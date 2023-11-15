import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  primary: '#E66767',
  secondary: '#FFEBD9',
  background: '#FFF8F2',
  white: '#fff',
  black: '#4B4B4B',
  red: '#E92966'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }
  body {

    background-color: ${cores.background};
  }
`

export const Logo = styled.img`
  margin-top: 40px;
`

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 0;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
`
