import React from 'react'
import styled from 'styled-components'


const Page = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
`

export default function PageContainer(props) {
    return (
        <Page>
            {props.children}
        </Page>
    )
}
