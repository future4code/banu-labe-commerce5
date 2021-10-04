import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Carrossel from "../components/Carrossel";
import Card from '../components/Card'

import {estoque} from '../js/estoque'


const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 400px 1fr;
  justify-items: center;
  background-color: #020067;
`;

const Loja = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 10vh;
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,160,233,1) 100%);  background-size: contain;
  border-radius: 10px;

`;

export default class Home extends React.Component {

  state = {
    loja: estoque,
  }



  render() {
    return (
      <React.Fragment>
        <Header />
        <Main>
          <Carrossel />
          <Loja> 
            {
              this.state.loja.map( value => {
                  return <Card idProduto={value.id_produto} img={value.imageUrl} preco={value.value} descricao={value.name}/>
              })
            }

          </Loja>
        </Main>
      </React.Fragment>
    )
  }
}
