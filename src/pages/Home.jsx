import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import Carrossel from "../components/Carrossel";
import {estoque} from '../js/estoque'
import Card from '../components/Card'
import img from "../img/projeto21.jpg";
import bg from '../img/1239365.jpg'


const Main = styled.div`
  display: grid;
  grid-template-rows: 400px 1fr;
  justify-items: center;
  background-color: #020067;
`;

const Loja = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 350px);
  grid-template-rows: repeat(3, 300px);
  justify-items: center;
  align-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  grid-gap: 3rem;
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
                  return <Card idProduto={value.id_produto}/>
              })
            }

          </Loja>
        </Main>
        <Footer />
      </React.Fragment>
    )
  }
}
