import React from 'react'
import styled from 'styled-components'
import { Mobile_XS, Mobile_XXS, Medium_Screen, LAPTOP_15PG_Screen, Large_Screen, XL_Screen, XXL_Screen, Wide, Total_Lined } from '../Responsive'


const bgw = [
    {
        screen: 'https://images.pexels.com/photos/6976096/pexels-photo-6976096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        screen: 'https://images.pexels.com/photos/3851790/pexels-photo-3851790.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
    ,
    {
        screen: 'https://images.pexels.com/photos/54200/pexels-photo-54200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        screen: 'https://images.pexels.com/photos/3419697/pexels-photo-3419697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
    ,
    {
        screen: 'https://images.pexels.com/photos/2268404/pexels-photo-2268404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        screen: 'https://images.pexels.com/photos/3171833/pexels-photo-3171833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
    ,
    {
        screen: 'https://images.pexels.com/photos/6974923/pexels-photo-6974923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        screen: 'https://images.pexels.com/photos/3598464/pexels-photo-3598464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
]
const random = Math.floor(Math.random() * (bgw.length));
const Container = styled.div`
background-image: url(${bgw[random].screen});
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.5rem;
height:auto;
width: 30%;
background:linear-gradient(150deg,rgba(255,255,255,1),rgba(0,0,0,0.1));
backdrop-filter: blur(10px);
padding: 3rem 0;
${Mobile_XXS({
    height: '100%',
    width: '100%'
})}
${Mobile_XS({
    height: '100%',
    width: '100%',
    gap: '0.5rem'
})}
${Medium_Screen({
    height: '65%',
    width: '70%',
    borderRadius: '1rem'
})}
${Large_Screen({
    height: '75%',
    width: '50%',
    borderRadius: '1rem'
})}
${LAPTOP_15PG_Screen({
    height: '75%',
    width: '35%',
    borderRadius: '1rem'
})}
${XXL_Screen({
    height: '55%',
    width: '35%',
    borderRadius: '1rem'
})}
${Wide({
    height: '45%',
    width: '35%',
    borderRadius: '1rem'
})}
`
const Heading = styled.h1`
font-size:70px;
${Mobile_XXS({
    fontSize: '48px'
})}
${Mobile_XS({
    fontSize: '48px'
})}
${XL_Screen({
    fontSize: '60px'
})}

${XXL_Screen({
    fontSize: '70px'
})}
${Wide({
    fontSize: '90px'
})}
`
const InnerWrapper_All = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.5rem;
height:auto;
width: 30%;
padding: 3rem 0;

${Mobile_XS({
    height: '75%',
    width: '100%',
    gap: '0rem'
})}

${Mobile_XXS({
    height: '100%',
    width: '100%',
})}

${Medium_Screen({
    height: '75%',
    width: '100%',
    gap: '1rem',
    padding: '0 2rem'
})}
${Total_Lined({
    height: '100%',
    width: '100%',

})}

`
const InnerWrapper = styled.div`
display: flex;
align-items: 'center';
justify-content:center;
flex-direction: ${props => props.flow};
width:${props => props.wd};
margin: auto;
background-color: ${props => props.bg};
padding: ${props => props.pd};
`
const Input = styled.input`
font-size: 20px;
padding: 1rem;
width: 100%;
margin: auto;
${Mobile_XXS({
    fontSize: '16px'
})}
${Mobile_XS({
    fontSize: '16px'
})}
${XXL_Screen({
    fontSize: '18px'
})}
${Wide({
    fontSize: '22px'
})}
`
const Btn = styled.button`
padding:2rem;
font-size: 24px;
background-color: teal;
color:white;
width: ${props => props.wd};
margin: auto;
width: 60%;
cursor:pointer;
${Mobile_XXS({
    fontSize: '20px',
    padding: '1rem'
})}
${Mobile_XS({
    fontSize: '20px',
    padding: '1rem'
})}
${Medium_Screen({
    fontSize: '22px',
    padding: '1rem'
})}
${Wide({
    fontSize: '25px',
})}
`
const Subtext = styled.h3`
font-size:24px;
font-weight: 500;
align-self: center;
color: ${props => props.color};
cursor: pointer;
text-align: center;
margin: auto 0;
height:100%;
padding: 1rem;
flex:1;
background-color:${props => props.bg};
${Mobile_XXS({
    fontSize: '18px'
})}
${Mobile_XS({
    fontSize: '18px'
})}
${Wide({
    fontSize: '24px'
})}
`

export const Login = () => {
    return (
        <Container>
            <Wrapper>
                <InnerWrapper_All>
                    <Heading>Login</Heading>
                    <InnerWrapper flow={'row'} wd={'60%'}>
                        <Input placeholder='Usuario/Email/Telefono'></Input>
                    </InnerWrapper>
                    <InnerWrapper flow={'row'} wd={'60%'}>
                        <Input type='email' placeholder='Contraseña'></Input>
                    </InnerWrapper>
                    <Btn>Loguear</Btn>
                    <InnerWrapper flow={'row'} bg={'white'} wd={'100%'}>
                        <Subtext bg={'#E0bd14'} color={'black'}>Ayuda</Subtext>
                        <Subtext bg={'#1c75cf'} color={'white'}>Crear Cuenta</Subtext>
                    </InnerWrapper>
                </InnerWrapper_All>
            </Wrapper>
        </Container>
    )
}
