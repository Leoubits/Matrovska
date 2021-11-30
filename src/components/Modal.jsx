import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ScrolltoTop } from './fx/ScrolltoTop'
import { Mobile_XS, Mobile_XXS, Medium_Screen, LAPTOP_15PG_Screen, Large_Screen, XL_Screen, XXL_Screen, Wide, Total_Lined } from '../Responsive'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100%;
position: absolute;
background:linear-gradient(40deg,rgba(0,0,0,0.2),rgba(255,255,255,0.5));
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
backdrop-filter: blur(10px);
width: 100%;
z-index: 10;

`
const Header = styled.h1`
font-size: 70px;
color: white;
position: relative;
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
&::after{
content: "";
position: absolute;
bottom:-40%;
left:50%;
transform: translate(-50%,-50%);
width: 50%;
height: 5px;
background-color: #1cb4b4;
}
&::before{
content: "";
position: absolute;
top:-40%;
right:0%;
transform: translate(-50%,-50%);
width: 50%;
height: 5px;
background-color: #1cb4b4;
}
${Mobile_XXS({
    fontSize: '36px'
})}
${Mobile_XS({
    fontSize: '36px'
})}
`
export const Modal = ({ cls_mdl }) => {
    ScrolltoTop();
    useEffect(() => {
        const timeOut = setTimeout(() => {
            cls_mdl();
        }, 1500);

        return (() => {
            clearTimeout(timeOut);
        })

    }, [])
    return (
        <Container>
            <Header>Añadido al carrito</Header>
        </Container>
    )
}
