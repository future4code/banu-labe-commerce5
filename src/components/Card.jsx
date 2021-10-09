import React, { useState } from "react";
import styled from "styled-components";
import cart from "../img/cil-cart.svg";
import { adicionarCarrinho } from "../js/handleCompras";

import { keyframes } from "styled-components";

const entrance = keyframes`
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }`

const Cartao = styled.div`
  width: 15rem;
  height: 25rem;
  background-color: #72268a9e;
  border-radius: 10px;
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation-name: ${entrance};
  animation-duration: 1s;


  > img {
    height: 100%;
    width: 100%;
    border-start-start-radius: 10px;
    border-start-end-radius: 10px;

    &:hover{
      transform: scale(1.3);
      transition: transform .2s;
    }
  }

  .descricao {
    margin-top: 15px;
    display: flex;
    text-align: center;
  }
  .botoes {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0px 20px 0 20px;
    img {
      height: 35px;
      width: 20px;
      margin-right: 10px;
    }
    span {
      font-size: 13px;
    }

    &:hover {
      background-color: steelblue;
      transition: all 1s;
      cursor: pointer;
    }
  }
`;

export default function Card(props) {
  return (
    <Cartao>
      <img src={props.img} alt="" />
      <div className="descricao">
        <p> {props.descricao}</p>
      </div>
      <div className="preco">
        <p>R$ {props.preco}</p>
      </div>
      <div
        className="botoes"
        onClick={(_) => adicionarCarrinho(props.idProduto)}
      >
        <img src={cart} alt="adicionar ao carrinho" />
        <span>adicionar ao carrinho</span>
      </div>
    </Cartao>
  );
}
