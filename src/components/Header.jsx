import React from "react";
import styled from "styled-components";
import user from "../img/cil-user.svg";

const HeaderComponent = styled.div`
  position: sticky;
  margin-left: 0;
  margin-right: 0;
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
  box-shadow: 1px 1px 15px whitesmoke;

  img {
    height: 30px;
    width: 30px;
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
      <div className="user">
        <img src={user} alt="usuario" /> <span>Vinicius</span>
      </div>
    </HeaderComponent>
  );
}
