import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Header from "./components/Header";

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
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/cart" exact={true} component={Cart} />
     </Switch>

  </BrowserRouter>)
}

export default App;
