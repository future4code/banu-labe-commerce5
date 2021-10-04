import { estoque } from "./estoque";

function adicionarCarrinho(id) {
  const carrinhoAtual = recuperarCarrinho();

  if (carrinhoAtual) {
    const carrinho = estoque.filter((value) => value.id_produto === id);
    carrinho.map(value => carrinhoAtual.push(value))
    const carrinhoFinal = JSON.stringify(carrinhoAtual);
    localStorage.setItem("checkout", carrinhoFinal);
  } else {
    const carrinho = estoque.filter((value) => value.id_produto === id);
    const carrinhoFinal = JSON.stringify(carrinho);
    localStorage.setItem("checkout", carrinhoFinal);
  }
}

function recuperarCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem("checkout"));
  console.log(carrinho);
  return carrinho;
}

export { adicionarCarrinho, recuperarCarrinho };
