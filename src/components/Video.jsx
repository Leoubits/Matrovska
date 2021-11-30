import React from 'react'
import styled from 'styled-components'
import VideoFile from '../data/video.mp4'
import { LAPTOP_15PG_Screen, Large_Screen, Medium_Screen, Mobile_XS, Mobile_XXS, Wide, XL_Screen, XXL_Screen } from '../Responsive'
const Container = styled.div`
width: 100%;
height:90vh;
display: flex;
position: relative;
flex-direction: column;
padding: 0rem;
margin-top: 3rem;
border-bottom: 6px solid white;
${Medium_Screen({
    padding: '0rem'
})}
${Large_Screen({
    padding: '2rem'
})}
`
const Video_m = styled.video`
object-fit: cover;
height: 100%;
width: 100%;
border: 4px solid white;

`
const Filler = styled.div`
height: 15%;
width: 85%;
position: absolute;
bottom:0%;
left:40%;
transform: translate(-50%,0%);
display: none;
justify-content: center;
align-items: center;
background-color: teal;
color: white;
background-image: url('https://images.pexels.com/photos/922353/pexels-photo-922353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
border:3px solid white;
background-blend-mode:darken;
margin: 2rem;

${Medium_Screen({
    display: 'flex',
    height: '10%',
    width: ' 80%',
    left: '40%'
})}
${Wide({
    left: '20%',
    width: '40%'
})}
`
const Big_mobtitle = styled.h1`

transform: rotate(270deg);
text-shadow: 10px 5px #00e9ca;
position: absolute;
display:flex;
top:25%;
left:-40%;
z-index: 200;
color: white;
padding: 0.5rem;

${Mobile_XS({
    fontSize: '75px'
})}

${Mobile_XXS({
    left: '-35%',
    top: '30%',
    fontSize: '60px'
})}
${Medium_Screen({
    left: '35%',
    top: '30%',
    fontSize: '120px'
})}
${Large_Screen({
    left: '45%',
    top: '30%',
    fontSize: '150px'
})}


${XL_Screen({
    display: 'none',

})}
`
const Big = styled.h1`
font-size: 100px;
text-shadow: 10px 5px #e94a00;
position: absolute;
top:70%;
left:5%;
z-index: 200;
color: white;
padding: 0.5rem;

${Mobile_XXS({
    fontSize: '85px'
})}
${Medium_Screen({
    fontSize: '120px',
    top: '55%',
})}
${Large_Screen({
    fontSize: '160px',
    top: '55%',
})}
${XL_Screen({
    fontSize: '175px',
    top: '25%',
})}
${XXL_Screen({
    fontSize: '205px',
})}
${Wide({
    top: '35%',
    fontSize: '225px',
})}
`
const Big_W = styled.h1`
font-size: 50px;
text-shadow: 10px 5px #e94a00;
position: absolute;
top:85%;
left:5%;
z-index: 200;
color: white;
padding: 0.5rem;

${Medium_Screen({
    fontSize: '110px',
    top: '70%',
})}
${Large_Screen({
    fontSize: '150px',
    top: '70%',
})}
${XL_Screen({
    fontSize: '175px',
    top: '50%',
})}
${XXL_Screen({
    fontSize: '205px',
})}
${Wide({
    fontSize: '225px',
    top: '55%',
})}
`
const Filler_Heading = styled.h1`
font-size: 16px;
color: white;
padding: 0rem 0.5rem;
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
${Medium_Screen({
    fontSize: '24px',
    padding: '2rem'
})}
${Large_Screen({
    fontSize: '30px',
    padding: '2rem'
})}
${Wide({
    fontSize: '36px',
    marginRight: 'auto',
    marginLeft: '5%'
})}


`
export const Video = () => {
    return (
        <Container>
            <Big_mobtitle>Matrovska</Big_mobtitle>
            <Big >25%</Big>
            <Big_W>Descuento</Big_W>
            <Video_m src={VideoFile} autoPlay muted
                loop></Video_m>
            <Filler>
                <Filler_Heading>Aprovecha nuestras promociones de Otoño ></Filler_Heading>
            </Filler>
        </Container>
    )
}
