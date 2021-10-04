import React from "react";
import styled from "styled-components";
import cart from '../img/cil-cart.svg'
import Cart from '../pages/Cart'
const HeaderComponent = styled.div`
  position: sticky;
  top: 0;
  height: 90px;
  //background-color: #02006757;
  background: linear-gradient(
    90deg,
    rgba(70, 67, 162, 0.7) 25%,
    rgba(146, 66, 192, 0.5231267507002801) 100%
  );
  backdrop-filter: blur(2px);
  z-index: 1020;
  display: flex;
  justify-content: space-between;
  padding: 0 20% 0 20%;
  align-items: center;

  .user{
    &:hover{
      background-color: burlywood;
      border-radius: 5px;
      color: black;
      transition: all 1s;
      cursor: pointer;
    }
  }

  img {
    height: 30px;
    width: 30px;
    margin-right: 15px;
  }
`;

export default function Header() {
  return (
    <HeaderComponent>
      <div className="logo">
        <h1>
          <i>NerdStore</i>
        </h1>
      </div>
      <div className="user" >
        <img src={cart} alt="usuario" /> <span>Ir para carrinho</span>
      </div>
    </HeaderComponent>
  );
}
