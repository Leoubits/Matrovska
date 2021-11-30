import React from 'react'
import styled from 'styled-components'
import { NewReleasesOutlined } from "@material-ui/icons";
import { Mobile_XS } from '../Responsive';
import { Mobile_XXS } from '../Responsive';
import { XL_Screen } from '../Responsive';
import { XXL_Screen } from '../Responsive';
import { Wide } from '../Responsive';

const Container = styled.div`
height: 50px;
padding: 2rem;
background-color: teal;
background-image: url('https://images.pexels.com/photos/922353/pexels-photo-922353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
border:3px solid white;
background-blend-mode:darken;
color: white;
display: flex;
justify-content: center;
align-items: center;
gap:0.5rem;
font-size: 18px;
font-weight: 500;
${Mobile_XXS({
    fontSize: '16px',
    textAlign: 'start',
    padding: '3rem 1rem'
})}
${Mobile_XS({
    fontSize: '16px',
    textAlign: 'start',
    padding: '3rem 2rem'
})}
${XL_Screen({
    fontSize: '16px',
    margin: '1rem 0 ',
    marginTop: '0'
})}
${XXL_Screen({
    fontSize: '24px',
    height: '80px'
})}

`
export const Announcement = () => {
    return (
        <div>
            <Container>
                < NewReleasesOutlined style={{ fontSize: '30px' }} />
                20% de descuento en toda la ropa para dama y calzado para caballero.
            </Container>
        </div>
    )
}
