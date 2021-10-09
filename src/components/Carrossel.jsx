import React from 'react'
import styled from 'styled-components'
import img1 from '../img/projeto21.jpg'

const Carroussel = styled.div`
width: 100vw;
height: 45vh;
img{
    height: 400px;
}

`

export default function Carrossel(props) {
    return (
        <Carroussel>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.nerdstore.com.br/wp-content/uploads/2021/10/banner-principal-desktop-torra-de-livros-1536x360.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.nerdstore.com.br/wp-content/uploads/2021/09/banner-principal-desktop-calca-you-shall-not-pass-1536x360.gif" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.nerdstore.com.br/wp-content/uploads/2021/09/banner-principal-desktop-pijamas-verao-nerdstore-novo-1-1536x360.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</Carroussel>
    )
}
