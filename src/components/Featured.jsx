import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Close } from '@material-ui/icons'
import { Mobile_XS, Mobile_XXS, Medium_Screen, LAPTOP_15PG_Screen, Large_Screen, XL_Screen, XXL_Screen, Wide, Total_Lined } from '../Responsive'

const Container = styled.div`
position: absolute;
z-index: 20;
background:linear-gradient(60deg,rgba(0,0,0,0.1),rgba(255,255,255,0.8));
left:50%;
top: 45%;
transform: translate(-50%,-50%);
display: flex;
justify-content: start;
align-items: center;
gap: 1.5rem;
padding: 2rem 3rem;
backdrop-filter: blur(15px);

${Mobile_XXS({ flexDirection: 'column', padding: '1rem', width: '85%' })}
${Mobile_XS({ flexDirection: 'column', padding: '1rem', width: '85%' })}
${Medium_Screen({ flexDirection: 'column', width: '80%' })}
${Large_Screen({
    width: '70%'
})}

${LAPTOP_15PG_Screen({
    height: '45%',
    width: '65%'
})}
${Total_Lined({
    height: '60%',
    width: '70%'
})}
${XL_Screen({ flexDirection: 'row' })}
${XXL_Screen({
    height: '50%',
    width: '60%'
})}
${Wide({
    height: '60%',
    width: '70%'
})}

`
const Img_Wrapper = styled.div`
flex:1;
border: 6px solid white;
${Large_Screen({
    height: '100%',
})}
`
const Img = styled.img`
height: 100%;
width:100%;
object-fit: cover;
`
const Info_Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 1.5rem;
flex:1.5;
background-color: white;
padding: 3.5rem;
position: relative;
${Mobile_XS({
    padding: '1rem'
})}
${Mobile_XXS({
    padding: '1rem'
})}
${Large_Screen({
    height: '100%'
})}
${LAPTOP_15PG_Screen({
    padding: '2rem'
})}
${Wide({
    paddingTop: '5rem',
    paddingLeft: '4rem',
    flex: '0.6'
})}

`
const Heading = styled.h1`
font-size: 70px;
color: black;

${Mobile_XS({
    fontSize: '30px',
    width: '80%'
})}
${Mobile_XXS({
    fontSize: '30px',
    width: '80%'
})}
${Medium_Screen({
    fontSize: '32px'
})}
${XXL_Screen({
    fontSize: '40px'
})}
${Wide({
    fontSize: '60px',
    width: '95%'
})}

`
const Inner_Wrapper = styled.div`
display: flex;
align-items: center;
height: auto;
gap: 2rem;
`
const Sub_Heading = styled.h3`
font-size: 30px;
color: black;
font-weight: 500;

`
const Code = styled.h3`
font-size: 30px;
color: gray;
font-weight: 300;
${Mobile_XS({
    fontSize: '16px'
})}
${Mobile_XXS({
    fontSize: '16px'
})}
${Medium_Screen({
    fontSize: '18px'
})}
`
const Desc = styled.p`
font-size: 24px;
color: black;
font-weight: 500;
${Mobile_XS({
    fontSize: '16px',
    lineHeight: '1.5',
})}
${Mobile_XXS({
    fontSize: '16px',
    lineHeight: '1.5',
})}

${Medium_Screen({
    fontSize: '18px',
    lineHeight: '1.5',
    width: '95%'
})}

${XXL_Screen({
    fontSize: '20px',

})}
${Wide({
    fontSize: '26px'
})}
`
const Button = styled.button`
font-size: 24px;
background-color: teal;
border: none;
color: white;
padding: 1rem 2rem;
cursor: pointer;
pointer-events: auto;
${Mobile_XS({
    fontSize: '16px', padding: '1rem'
})}
${Mobile_XXS({
    fontSize: '16px', padding: '1rem'
})}
${Medium_Screen({
    fontSize: '18px',
})}
${XXL_Screen({
    fontSize: '20px',
})}
${Wide({
    fontSize: '24px',
})}
`

export const Featured = () => {
    let modalPointerEvents = JSON.parse(localStorage.getItem("modal_events"));
    let img = modalPointerEvents.items.img;
    let name = modalPointerEvents.items.name;
    let code = modalPointerEvents.items.code;


    console.log(modalPointerEvents);
    const UpdatePointerEvents = () => {
        document.querySelector('#Modal').style.opacity = `0`;
        document.querySelector('#Modal').style.transition = `opacity 1s ease`;
        document.querySelector('#Modal').style.pointerEvents = `none`;
        document.getElementById('center').style.pointerEvents = `all`;
    }
    const updateStates = () => {
        img = modalPointerEvents.items.img;
        name = modalPointerEvents.items.name;
        code = modalPointerEvents.items.code;
    }
    useEffect(() => {
        updateStates();
    }, [modalPointerEvents])

    return (
        <Container id='Modal'>
            <Img_Wrapper>
                <Img src={img}></Img>
            </Img_Wrapper>
            <Info_Wrapper>
                <Close onClick={(e) => UpdatePointerEvents(e)} style={{
                    fontSize: '50px',
                    position: 'absolute',
                    top: '2%',
                    right: '2%',
                    cursor: 'pointer',
                    pointerEvents: 'all',
                    color: 'red'
                }} />
                <Heading>{name}</Heading>
                <Inner_Wrapper>
                    {/* <Sub_Heading>Hola</Sub_Heading> */}
                    <Code>{code}</Code>
                </Inner_Wrapper>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ab atque numquam temporibus quos sapiente reiciendis dolorum et voluptas incidunt.</Desc>
                <Button>Conocer más..</Button>
            </Info_Wrapper>

        </Container>
    )
}
