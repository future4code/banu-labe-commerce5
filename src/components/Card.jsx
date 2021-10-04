import React, { useState } from "react";
import styled from "styled-components";
import img from "../img/projeto21.jpg";
import cart from '../img/cil-cart.svg'
import { adicionarCarrinho } from "../js/handleCompras";

const Cartao = styled.div`
  width: 18rem;
  height: 20rem;
  background-color: #72268a9e;
  border-radius: 10px;
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 60%;
    width: 100%;
    border-start-start-radius: 10px;
    border-start-end-radius: 10px;

  }

  .descricao{
      margin-top: 15px;
     display: flex;
     text-align: center;
      
  }
  .botoes{
      display: flex;
      justify-content: center;
      border-radius: 20px;
      margin: 0px 20px 0 20px;
      img {
          height: 20px;
          width: 20px;
          margin-right: 10px;
      }
      span{
          font-size: 13px;
      }

      &:hover{
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
        
      </div >
      <div className="preco">
        <p>R$ {props.preco}</p>
      </div>
      <div className="botoes" onClick={e => adicionarCarrinho(props.idProduto)}>
        <img src={cart} alt="adicionar ao carrinho" 
        />
        <span>adicionar ao carrinho</span>

      </div>
    </Cartao>
  );
}
