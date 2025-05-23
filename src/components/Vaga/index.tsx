/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import styles from './Vaga.module.css'


export const Vagao = styled.div`
  border: 1px solid #a7727d;
  background-color:#f9f5e7;
  color:#a7727d;
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color:#a7727d;
    color:#f9f5e7;

    a {
      border-color: #a7727d;
      background-color: #f9f5e7;
      color:#a7727d;
    }
  }
`;

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const VagaLink = styled.a`
  border: 1px solid var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <li className={styles.vaga}>
    <h3 className={styles.vagaTitulo}>{props.titulo}</h3>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <a className={styles.vagaLink} href="#">
      Ver detalhes e candidatar-se
    </a>
  </li>
)

export default Vaga


