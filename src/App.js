import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html,body{
   background-color: #020067;
   color: whitesmoke;
   font-family: Poppins, sans-serif;
   display: flex;
   flex-direction: column;
}

`;

function App() {
  return(
  <React.Fragment>
    <GlobalStyle />
    <Home />
  </React.Fragment>)
}

export default App;
