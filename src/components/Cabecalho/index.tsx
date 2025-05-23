/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'
import styles from './Cabecalho.module.css'


const Header = styled.header`
background-color:#f9f5e7;
  color:#a7727d ;
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <Header>
    <h1>EBAC Jobs</h1>
  </Header>
)

export default Cabecalho
