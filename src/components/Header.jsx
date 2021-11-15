import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import cart from "../img/cil-cart.svg";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { recuperarCarrinho, limparCarrinho } from '../js/handleCompras'


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

  .logo {
    display: flex;
    width: 30vw;
    justify-content: center;
    align-items: center;

    img {
      height: 70px;
      width: 70px;
    }
    a {
      text-decoration: none;
      color: whitesmoke;
    }
  }

  .user {
    color: white;
    &:hover {
      background-color: #8788de;
      border-radius: 5px;
      color: black;
      transition: all 0.5s;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: whitesmoke;
    }
    span{
      margin: 3px;
    }

    span.car{
      padding-left: 5px;
      background-color: #911010;
      width: 25px;
      border-radius: 5px;
      display: inline-block;
      margin: 0 auto;
    }

    div.limpar{
      padding-left: 10px;
      display: inline-block;

      &:hover {
      background-color: #911010;
      transform: scale(1);
      border-radius: 5px;
      color: black;
      transition: all 0.5s;
      cursor: pointer;
    }
    }
  }

  img {
    height: 30px;
    width: 30px;
    margin-right: 15px;
  }
`;

export default function Header() {
  const history = useHistory()
  
  const [carrinho, setCarrinho] = useState()
  useEffect(() => {
    setInterval( _ =>{
      recuperarCarrinho() && setCarrinho(recuperarCarrinho().length)
    }, 1000)
  },[])



  return (
    <HeaderComponent>
      <div className="logo">
        <img src={logo} alt="logomarca" />
        <Link to="/">
          <h1>
            <i>NerdStore</i>
          </h1>
        </Link>
      </div>
      {window.location.pathname === '/' ? (
        <div className="user">
          <Link to="cart">
            <img src={cart} alt="usuario" /> <span>Ir para carrinho</span>
            <span className="car">{carrinho}</span>
          </Link>
        </div>
      ) : (
        <div className="user">
          <Link to="/">
            <span>Continuar Comprando</span>
          </Link>
          <div className='limpar'
          onClick={_ =>{
            window.confirm("Deseja remover todos os itens do carrinho?") && limparCarrinho();
            history.push("/")
          }
          }
          >Limpar Carrinho</div>
        </div>
      )}
    </HeaderComponent>
  );
}
