import React from 'react'
import styled from 'styled-components'
import { Mobile_XS, Mobile_XXS, Medium_Screen, LAPTOP_15PG_Screen, Large_Screen, XL_Screen, XXL_Screen, Wide } from '../Responsive'
const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Header = styled.h1`
font-size: 48px;
font-weight: 300;
align-self: center;
color: red;
${Mobile_XXS({
    padding: '0.5rem',
    fontSize: '30px',

})}
${Mobile_XS({
    fontSize: '36px',

})}
${Medium_Screen({
    padding: '5rem',
    fontSize: '48px',


})}
`
export const Empty = () => {
    return (

        <Container>
            <Header>Tú Carrito está Vacio.</Header>
        </Container>

    )
}
