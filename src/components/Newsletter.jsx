import React from 'react'
import styled from 'styled-components'
import { Send } from "@material-ui/icons";
import { Large_Screen, Mobile_XS, Total_Lined, Wide } from '../Responsive';
import { Mobile_XXS } from '../Responsive';
import { Medium_Screen } from '../Responsive';
import { XL_Screen } from '../Responsive';
import { LAPTOP_15PG_Screen } from '../Responsive';
import { XXL_Screen } from '../Responsive';
import { Medium_Large_Screen } from '../Responsive';

const Container = styled.div`
height: 40vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
gap: 1rem;
width: 100%;
background-color: #d66f34;
color: white;
background-image: url('https://images.pexels.com/photos/2264075/pexels-photo-2264075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
background-blend-mode:darken;

${Mobile_XS({
    padding: '1rem',
    gap: '0.5rem',
    padding: '3rem 1rem '

})}

${Mobile_XXS({
    padding: '1rem',
    gap: '1rem',
    padding: '3rem 1rem '

})}

${Medium_Screen({ height: '40vh', padding: '1.5rem' })}
${Total_Lined({ height: '55vh' })}

`
const Title_Container = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

${Mobile_XXS({
    gap: '1rem'
})}
${Mobile_XS({
    flex: '0.6'
})}
${Medium_Screen({ flex: '0.3' })}
${XL_Screen({
    flex: '0.5'
})}
`
const Heading_1 = styled.div`
font-size: 70px;
font-weight: 600    ;
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
${Mobile_XS({
    fontSize: '48px',
    padding: '0',
    alignSelf: 'start'
})}

${Mobile_XXS({
    fontSize: '36px',

})}
${Medium_Screen({
    fontSize: '60px'
})}
${XL_Screen({
    fontSize: '48px'
})}
${XXL_Screen({
    fontSize: '70px'
})}
${Wide({
    fontSize: '100px'
})}
`
const Heading_3 = styled.div`
font-size: 24px;
font-weight: 600;
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

${XXL_Screen({
    fontSize: '48px',
    fontWeight: '300'
})}
${Wide({
    fontSize: '52px'
})}
${Mobile_XS({
    fontSize: '20px',
    padding: '0',
    textAlign: 'start '

})}

${Mobile_XXS({
    fontSize: '18px',
    textAlign: 'start'
})}


`
const Input_Container = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
width: 55%;

${Mobile_XXS({
    marginRight: 'auto',
    flex: '0.3'
})}
${Mobile_XS({
    width: '90%',
    flex: '0.3',
    marginRight: 'auto',
})}
${Medium_Screen({ width: '90%', flex: '0.2' })}
${Medium_Large_Screen({ width: '75%' })}
${XL_Screen({ width: '50%' })}
${LAPTOP_15PG_Screen({ width: '50%' })}
${XXL_Screen({
    width: '40%',
})}
`
const Input_Mail = styled.input`
flex: 3;
padding: 1rem 2rem;
font-size: 24px;
height: 100%;

${Mobile_XS({
    width: '100%',
    padding: '1rem',
    fontSize: '20px',
})}

${Mobile_XXS({
    fontSize: '18px',
})}


`
const Button = styled.button`
flex: 1;
font-size: 24px;
background-color: teal;
color: white;
height: 100%;
border: none;
cursor: pointer;
`
export const Newsletter = () => {
    return (
        <Container>
            <Title_Container>
                <Heading_1>Boletín</Heading_1>
                <Heading_3>Recibe en tu correo nuestras promociones</Heading_3>
            </Title_Container>
            <Input_Container>
                <Input_Mail placeholder="Ingresa tú Email"></Input_Mail>
                <Button><Send /></Button>
            </Input_Container>
        </Container>
    )
}
