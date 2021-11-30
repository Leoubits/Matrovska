import React from 'react'
import styled from 'styled-components'
import { Facebook, Twitter, Instagram, Pinterest, Room, PhoneAndroid, AlternateEmail } from "@material-ui/icons";
import { Mobile_XS } from '../Responsive';
import { Mobile_XXS } from '../Responsive';
import { Medium_Screen } from '../Responsive';
import { Medium_Large_Screen } from '../Responsive';
import { XL_Screen } from '../Responsive';
import { LAPTOP_15PG_Screen } from '../Responsive';
import { XXL_Screen } from '../Responsive';
import { Wide } from '../Responsive';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 40vh;
background: linear-gradient(180deg,white,#e2e2e2);
backdrop-filter: blur(10px);
border-top: 6px solid WHITE;

${Mobile_XS({ height: 'auto' })}
${Medium_Screen({ height: 'auto' })}
${XXL_Screen({ color: "white" })}
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
gap: 2rem;
background-blend-mode:multiply;
position: relative;
${Mobile_XXS({
    padding: '0rem 1rem'
})}
${Mobile_XS({
    flexDirection: 'column',
    padding: '0rem 1rem'
})}

${Medium_Screen({
    flexDirection: 'column',
    gap: '3rem',
    zIndex: '0'
})}

${XL_Screen({ gap: '2rem', paddingTop: '3rem', width: '100%' })}


${XXL_Screen({ padding: '3rem', flexDirection: 'initial' })}
`
const BG = styled.div`
display: 'none';

${Medium_Screen({
    position: 'absolute',
    top: '0%',
    left: '0%',
    transform: 'translante(-50%,-50%)',
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'white',
    backgroundImage: `url('https://images.unsplash.com/photo-1568251478083-32c27296c2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80')`,
    backgroundPosition: '10%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.8',
    objectFit: 'cover',
    zIndex: '-1'

})}

${Medium_Large_Screen({
    backgroundPosition: '5%',
})}

${XL_Screen({
    backgroundPosition: 'left',
    objectFit: 'fit',
    backgroundImage: `url('https://images.pexels.com/photos/3194901/pexels-photo-3194901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
})}
${XXL_Screen({
    backgroundPosition: 'left',
    objectFit: 'fit',
    backgroundImage: `url('https://images.pexels.com/photos/192136/pexels-photo-192136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
})}

`
const Titles = styled.div`
display: flex;
flex:1.5;
flex-direction: column;
justify-content: center;
gap: 2rem;
${XL_Screen({ alignItems: 'start', margin: 'auto', width: '95%' })}
`
const Logo = styled.h1`
font-size: 70px;
position: relative;
z-index: 0;
transition: color 1s ease;
overflow: hidden;
padding: 0 1rem;
color: white;
&:hover{
    color: white;
}
&:hover::after{
    width: 200%;
}
::after{
content:'';
position: absolute;
top: 50%;
left: 100%;
width: 200%;
height: 100%;
transform: translate(-50%,-50%);
transition: width 1s cubic-bezier(0.165, 0.84, 0.44, 1);
background-color: teal;
box-shadow: 0px 10px 15px black;
z-index: -1;
}

${Mobile_XS({
    fontSize: '48px',
    padding: '0'

})}
${Mobile_XXS({
    fontSize: '36px'

})}
${XL_Screen({
    fontSize: '48px'
})}
`
const Title_Desc_Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 90%;

${Mobile_XS({ gap: '0.5rem' })}

${Medium_Screen({
    lineHeight: '1.5',
    width: '70%'
})}
${Medium_Large_Screen({
    width: '65%'
})}
${XL_Screen({
    borderLeft: '5px solid white',
    paddingLeft: '1rem',

})}
${XXL_Screen({
    width: '90%'

})}
${Wide({ paddingLeft: '1.5rem', })}
`
const Titles_Desc = styled.h3`
font-size: 24px;
font-weight: 300;

${Mobile_XS({
    fontSize: '20px',
    padding: '0',
    lineHeight: '1.5'

})}
${Mobile_XXS({
    fontSize: '16px',
    lineHeight: '1.5'

})}
${XL_Screen({
    fontSize: '20px'
})}
${Wide({
    width: '85%'
})}
`
const Social = styled.div`
display: flex;
align-items: center;
gap: 1rem;
${XL_Screen({
    borderLeft: '5px solid white',
    paddingLeft: '1rem',
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: '0.2rem',
    width: '20%'
})} 
${XXL_Screen({ width: '30%' })}
${Wide({ paddingLeft: '1.5rem', width: '25%' })}
`
const Links = styled.div`
display: flex;
flex:1.1;
flex-direction: column;
justify-content: center;
align-items: start;
gap: 2rem 3rem;
${Medium_Screen({ marginRight: 'auto' })}
${XL_Screen({ alignItems: 'start', margin: 'auto', width: '95%' })}
${XXL_Screen({ minHeight: '350px', justifyContent: 'start', gap: '3rem' })}

`
const Link_Heading = styled.h1`
font-size: 48px;
position: relative;

::after{
    content:'';
position: absolute;
bottom: -10%;
left: 50%;
width: 100%;
height: 5px;
transform: translate(-50%,-50%);
background-color: teal;

}

${Mobile_XXS({ fontSize: '36px' })}
`
const Link_Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 4rem;
${Medium_Screen({ flexDirection: 'column', alignItems: 'start' })}
${XL_Screen({
    flexDirection: 'row',
    borderLeft: '5px solid white',
    paddingLeft: '1rem',
})} 
${Wide({ paddingLeft: '1.5rem', })}
`
const Link_Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
gap: 1rem;
${XXL_Screen({ gap: '2rem' })}
`
const Link_Item = styled.a`
font-size: 24px;
font-weight: 300;
cursor: pointer;

${Mobile_XS({
    fontSize: '20px',
    padding: '0'

})}

${Mobile_XXS({ fontSize: '16px' })}

${XL_Screen({
    fontSize: '20px'
})}

${XXL_Screen({
    fontWeight: '400',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
})}
`
const Contact = styled.div`
display: flex;
flex:1;
flex-direction: column;
justify-content: center;
align-items: start;
gap: 2rem;
${Medium_Screen({ marginRight: 'auto' })}
${XL_Screen({ alignItems: 'start', margin: 'auto', width: '95%' })}
${XXL_Screen({ minHeight: '350px', justifyContent: 'start' })}
`
const Contact_Heading = styled.h1`
font-size: 48px;
position: relative;

::after{
    content:'';
position: absolute;
bottom: -10%;
left: 50%;
width: 100%;
height: 5px;
transform: translate(-50%,-50%);
background-color: teal;
}
${Mobile_XXS({ fontSize: '36px' })}
`

const Contact_Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
gap: 0.5rem;

${Mobile_XS({
    gap: '1.5rem'

})}
${XL_Screen({
    gap: '1rem',
    borderLeft: '5px solid white',
    paddingLeft: '1rem',
    padding: '0.4rem',
})} 
${XXL_Screen({
    gap: '2rem',
})} 
${Wide({ paddingLeft: '1.5rem', })}
`
const Location = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
const Mail = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
const Mail_Desc = styled.h3`
font-size: 24px;
font-weight: 300;
${Mobile_XS({
    fontSize: '20px',
    padding: '0'

})}
${Mobile_XXS({
    fontSize: '16px',

})}
${XL_Screen({
    fontSize: '20px'
})}
`
const Phone = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
const Payment = styled.div`
display: flex;
align-items: center;
gap: 1rem;

${XL_Screen({
    paddingLeft: '1rem',
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: '0.4rem',
    gap: '2rem'
})} 
${Wide({
    width: '80%'
})}
`
const Contact_Desc = styled.h3`
font-size: 24px;
font-weight: 300;
${Mobile_XS({
    fontSize: '20px',
    padding: '0'

})}
${Mobile_XXS({
    fontSize: '16px',

})}
${XL_Screen({
    fontSize: '20px'
})}

`
const PayIcon = styled.img`
height: 60px;
width: 60px;
`

export const Footer = () => {

    return (
        <Container>
            <Wrapper>
                <BG></BG>
                <Titles>
                    <Logo>Matrovska</Logo>
                    <Title_Desc_Container>
                        <Titles_Desc>Empresa de origen ucraniano con el deseo de poner al alcance de todos ropa a precio accesible y de gran calidad.</Titles_Desc>
                        <Titles_Desc>Nuestra misión eres tú y tú estilo, deseamos verte siempre genial.</Titles_Desc>
                    </Title_Desc_Container>
                    <Social>
                        <Facebook style={{ fontSize: '35px', color: "#1942b4 ", cursor: 'pointer' }} />
                        <Twitter style={{ fontSize: '35px', color: "#0da7e4 ", cursor: 'pointer' }} />
                        <Instagram style={{ fontSize: '35px', color: "#b43806 ", cursor: 'pointer' }} />
                        <Pinterest style={{ fontSize: '35px', color: "#b41919 ", cursor: 'pointer' }} />
                    </Social>
                </Titles>
                <Links>
                    <Link_Heading>Links</Link_Heading>
                    <Link_Container>
                        <Link_Wrapper>
                            <Link_Item>Inicio</Link_Item>
                            <Link_Item>Categorías</Link_Item>
                            <Link_Item>Top Ventas</Link_Item>
                            <Link_Item>Wishlist</Link_Item>
                        </Link_Wrapper>
                        <Link_Wrapper>
                            <Link_Item>Mi Cuenta</Link_Item>
                            <Link_Item>Carrito de compras</Link_Item>
                            <Link_Item>Promociones</Link_Item>
                            <Link_Item>Terminos & Condiciones</Link_Item>
                        </Link_Wrapper>
                    </Link_Container>
                </Links>
                <Contact>
                    <Contact_Heading>Contacto</Contact_Heading>
                    <Contact_Wrapper>
                        <Location>
                            <Room />
                            <Contact_Desc>Charles Ortega #345, Colonia Condesa.</Contact_Desc>
                        </Location>
                        <Phone>
                            <PhoneAndroid />
                            <Contact_Desc>099-465-323</Contact_Desc>
                        </Phone>
                        <Mail>
                            <AlternateEmail />
                            <Mail_Desc>contacto@matrovska.com</Mail_Desc>
                        </Mail>
                        <Payment>
                            <PayIcon src='https://cdn-icons-png.flaticon.com/512/196/196539.png'></PayIcon>
                            <PayIcon src='https://cdn-icons-png.flaticon.com/512/196/196578.png'></PayIcon>
                            <PayIcon src='https://cdn-icons-png.flaticon.com/512/196/196565.png'></PayIcon>
                            <PayIcon src='https://cdn-icons-png.flaticon.com/512/196/196579.png'></PayIcon>
                        </Payment>
                    </Contact_Wrapper>
                </Contact>
            </Wrapper>
        </Container>
    )
}
