import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Carrossel from "../components/Carrossel";
import Card from "../components/Card";

import { estoque } from "../js/estoque";

const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 400px 1fr;
  justify-items: center;
  background-color: #020067;

  .vitrina {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: fit-content;
    background-color: white;
    border-radius: 5px;
    right: 10px;
  }

  .filtros {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 10vh;
    margin: 20px;
    background-color: whitesmoke;
    border-radius: 10px;

    input{
      text-align: center;
      border-radius: 5px;
      border: 1px solid grey;
      margin: 0 5px 0 5px;
    }

    select{
      font-size: 14px;
      margin: 0 5px 0 5px;

    }
  }
`;

const Loja = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 50px;
`;

export default class Home extends React.Component {
  state = {
    loja: estoque,
    query: "",
    minPrec: "",
    MaxPrec: "",
    listar: "name",
    ordem: 1,
  };

  render() {
    return (
      <React.Fragment>
        <Main>
          <Carrossel />
          <Loja>
            <div className="filtros">
              <div className="buscarNome">
                <input
                  type="text"
                  placeholder="Pesquisar"
                  value={this.state.query}
                  onChange={(e) => this.setState({ query: e.target.value })}
                />
              </div>

              <div className="bucarPreco">
                <input
                  type="number"
                  placeholder="Valor Mínimo"
                  value={this.state.minPrec}
                  onChange={(e) => {
                    this.setState({
                      minPrec: e.target.value,
                    });
                  }}
                />

                <input
                  type="number"
                  placeholder="Valor Máximo"
                  value={this.state.MaxPrec}
                  onChange={(e) => {
                    this.setState({
                      MaxPrec: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="ordenar">
                <select
                  name="valor"
                  value={this.state.listar}
                  onChange={(e) =>
                    this.setState({
                      listar: e.target.value,
                    })
                  }
                >
                  <option value="name">Ordem Alfabética</option>
                  <option value="value">Valor</option>
                </select>

                <select
                  name="ordenacao"
                  value={this.state.ordem}
                  onChange={(e) =>
                    this.setState({
                      ordem: e.target.value,
                    })
                  }
                >
                  <option value={1}>Crescente</option>
                  <option value={-1}>Decrescente</option>
                </select>
              </div>
            </div>

            <div className="vitrina">
              {this.state.loja
                .filter((produto) => {
                  return produto.name
                    .toLowerCase()
                    .includes(this.state.query.toLowerCase());
                })
                .filter((produto) => {
                  return (
                    this.state.minPrec === "" ||
                    produto.value >= this.state.minPrec
                  );
                })
                .filter((produto) => {
                  return (
                    this.state.MaxPrec === "" ||
                    produto.value <= this.state.MaxPrec
                  );
                })
                .sort((valorAtual, proximoValor) => {

                  switch (this.state.listar) {
                    case "name":
                      return this.state.ordem * valorAtual.name.localeCompare(proximoValor.name)                  
                    default:
                      return this.state.ordem * (valorAtual.value - proximoValor.value)
                  }

                })
                .map((value) => {
                  return (
                    <Card
                      idProduto={value.id_produto}
                      img={value.imageUrl}
                      preco={value.value}
                      descricao={value.name}
                    />
                  );
                })}
            </div>
          </Loja>
        </Main>
      </React.Fragment>
    );
  }
}
