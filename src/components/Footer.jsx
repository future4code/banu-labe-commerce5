import React from 'react'
import styled from 'styled-components'


const FooterComponent = styled.div`
height: 200px;
background-color: black;
color: whitesmoke;
display: flex;
width: 100vw;

display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
`
    


export default function Footer() {
    return (
        <FooterComponent>
        </FooterComponent>
    )
}
