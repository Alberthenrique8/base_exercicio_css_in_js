/* eslint-disable react/react-in-jsx-scope */
import { useState, FormEvent } from "react";
import styled from "styled-components";
import styles from './FormVagas.module.css'


const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #f9f5e7;
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`;

const Campo = styled.input`
  width:720px
  border:2px;
  padding:16px;
  outline-color:#f9f5e7 ;
  font-size: 16px;
`;

const Botao = styled.button`
  background-color: #a7727d;
  border: 1px solid #f9f5e7;
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: #f9f5e7;
  margin-left: 8px;
  cursor: pointer;
`;

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <form className={styles.form} onSubmit={aoEnviarForm}>
      <input
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: { target: { value: any } }) => setTermo(e.target.value)}
        type="search"
      />
      <button className={styles.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
  )
}
export default FormVagas
