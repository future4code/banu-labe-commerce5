import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body{
   width: 100vw;
   background-color: #020067;
   color: whitesmoke;
   font-family: Poppins, sans-serif;
   display: flex;
   flex-direction: column;
   overflow-x: hidden;
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
