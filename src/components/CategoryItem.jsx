import React, { useState } from 'react'
import styled from 'styled-components'
import Catalog from '../data/Catalog'
import { useNavigate } from 'react-router-dom'
import { LAPTOP_15PG_Screen, Mobile_XS, Total_Lined, XL_Screen } from '../Responsive';
import { Mobile_XXS } from '../Responsive';
import { Medium_Screen } from '../Responsive';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 0.5rem;
min-height:500px;
${Medium_Screen({
    gap: '1rem',
})}
${Mobile_XS({
    gap: '1rem'
})}

`
const Category_heading = styled.h1`
font-size: 36px;
font-weight: 500;
text-align: center;
width: 100%;
${XL_Screen({
    fontSize: '30px'
})}
`
const Inner_Container = styled.div`
display: "flex";
flex-direction: 'column';
height: 100%;
width: 100%;

${Mobile_XXS({
    gap: '0rem'
})}
`
const Img_wrapper = styled.div`
height: 550px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
cursor: pointer;

${Medium_Screen({
    height: '400px',
    width: '100%',
})}
${Total_Lined({
    height: '300px',
    width: '100%',
})}
${Mobile_XS({
    height: '400px',
    width: '100%',
})}
${Mobile_XXS({
    height: '350px',
    width: '100%',
})}
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
transition: transform 1s ease;
&:hover{
    transform: scale(1.1);
}
`
const Btn = styled.button`
margin-top: 0.5rem;
padding: 2rem;
font-size: 20px;
background-color: #dfdfdf;
border: none;
cursor: pointer;
transition: background-color 1s ease,box-shadow 1s ease;
&:hover{
    /* background-color: #d3d3d3; */
    background-color: ORANGE;
    box-shadow: 1px 1px 5px #807f7f;
}

${Medium_Screen({ fontSize: '20px' })}
${XL_Screen({ fontSize: '20px', padding: '1.5rem 1rem' })}
${Mobile_XS({
    padding: '1rem'
})}
${Mobile_XXS({
    fontSize: '18px'
})}
`
export const CategoryItem = ({ item }) => {
    const { id, title, img } = item;
    const [element, setelement] = useState([{ category: title, data: Catalog[id - 1] }])
    let navigate = useNavigate()
    return (
        <Container>
            <Category_heading>{title}</Category_heading>
            <Inner_Container>
                <Img_wrapper onClick={() => navigate('/Catalog', { state: element })}>
                    <Image src={img} onClick={() => navigate('/Catalog', { state: element })} />
                </Img_wrapper>
                <Btn style={{ width: '100%' }} onClick={() => navigate('/Catalog', { state: element })}>Mostrar Catalogo</Btn>
            </Inner_Container>

        </Container>
    )
}
