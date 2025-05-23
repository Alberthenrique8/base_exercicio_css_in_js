/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */

import styled, { createGlobalStyle } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }
`


const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
