import React from "react";
import { recuperarCarrinho } from "../js/handleCompras";
import styled from "styled-components";

/* let productList =[
  {name: "Camiseta Divertida", price:150, info:"Camiseta de algodão,P"},
  {name: "Camiseta Lunar", price:100, info:"Camiseta de algodão,M"},
  {name: "Camiseta Satuno", price:160, info:"Camiseta de algodão,G"}
]  */

const Carrinho = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  background-color: whitesmoke;
  border-radius: 20px;
  color: blue;
  padding: 20px;
`;

let productList = recuperarCarrinho();

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
    };
    // Eventos
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }
  add() {
    this.setState({
      qty: this.state.qty + 1,
    });
  }
  remove() {
    this.setState({
      qty: this.state.qty - 1,
    });
  }
  showInfo() {
    alert(this.props.info);
  }
  render() {
    return (
      <div>
        <div className="row form-group">
          <div className="col-sm-10">
            <h4>
              {this.props.name}: R$ {this.props.price}
            </h4>
          </div>
          <div className="col-sm-2 text-right">
            Quantidade: {this.state.qty}
          </div>
          <div className="row btn-toolbar">
            <div className="col-6">
              <button
                className="btn btn-outline-primary"
                onClick={this.showInfo}
              >
                Informações
              </button>
            </div>
            <div className="col-6 text-rigth">
              <button className="btn btn-outline-primary" onClick={this.add}>
                +
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={this.remove}
                disabled={this.state.qty < 1}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ productList: productList });
    }, 1000);
  }
  render() {
    if (!this.state.productList) return <p>Carregando....</p>;

    const products = this.state.productList.map(function (product) {
      return (
        <Product
          name={product.name}
          price={product.value}
          info={product.info}
        />
      );
    });

    return <div>{products}</div>;
  }
}
function Cart() {
  return (
    <Carrinho >
      {" "}
      <ProductList  />
    </Carrinho>
  );
}

export default Cart;
