import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'
import { PopularProds } from '../data/Data'
import { ProductItem } from './ProductItem'
import { Featured } from './Featured';
import { LAPTOP_15PG_Screen, Mobile_XS } from '../Responsive';
import { Mobile_XXS } from '../Responsive';
import { Medium_Screen } from '../Responsive';
import { Medium_Large_Screen } from '../Responsive';
import { XL_Screen } from '../Responsive';
import { XXL_Screen } from '../Responsive';
import { Wide } from '../Responsive';

const Container = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
overflow: hidden;
`
const Product_container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
grid-template-rows: 500px;
gap: 1rem;
padding: 1rem 2rem;
position: relative;


${Mobile_XXS({
    gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr)) !important',
    gap: '0.5rem',
    padding: '1rem'
})}
${Mobile_XS({
    gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr)) ',
    gridTemplateRows: '300px',
    padding: '0rem'
})}

${Medium_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(550px,1fr)) ',
    gridTemplateRows: 'auto',
    padding: '2rem'
})}
${Medium_Large_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr)) ',
    gridTemplateRows: 'auto',
    padding: '2rem'
})}

${LAPTOP_15PG_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(275px,1fr)) ',
    gridTemplateRows: 'auto',
})}

${XXL_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr)) ',
    gridTemplateRows: 'auto',
    padding: '2rem'
})}
${Wide({
    gridTemplateColumns: 'repeat(auto-fit,minmax(570px,1fr)) ',
})}

`
const Titles = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
padding: 2rem;
background-color: teal;
background-image: url('https://images.pexels.com/photos/922353/pexels-photo-922353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
border:3px solid white;
background-blend-mode:darken;

${Mobile_XS({
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem 1rem',
    gap: '1rem',
})}

${Medium_Screen({
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem 1rem',
    gap: '1rem',
})}
`
const Heading = styled.h1`
font-size: 70px;
color: white;
text-align: center;


color:white;
${Mobile_XXS({ fontSize: '36px' })}
${Mobile_XS({ fontSize: '48px' })}
${XL_Screen({ fontSize: '48px' })}
${XXL_Screen({ fontSize: '60px' })}
`
const Titles_heading_3 = styled.h3`
font-size: 30px;
color:white;
font-weight: 500;
${Mobile_XXS({ fontSize: '18px' })}
${Mobile_XS({ fontSize: '20px' })}
${XL_Screen({ fontSize: '22px' })}
${XXL_Screen({ fontSize: '28px' })}
`
const Btn = styled.button`
padding: 2rem;
font-size: 24px;
border: none;
background-color: #ff5e00;
margin: 0 2rem;
color: white;
font-weight: 500;
cursor: pointer;
transition: background-color 1s ease;
&:hover{
    background-color: #0e8585;
}
${Mobile_XS({ margin: '1rem 0.5rem' })}

${Mobile_XXS({ fontSize: '20px', margin: ' 1rem 0.5rem' })}
${Medium_Screen({
    width: '50%', margin: 'auto'
})}
${Wide({ width: '30%' })}
`

export const Products = () => {
    const [Products, setProducts] = useState(PopularProds)

    const filterData = (value) => {
        let result = PopularProds.filter((product) => {
            return product.id <= value
        })
        return result;
    }

    const initialState = {
        product: filterData(8),
        btnLoad: 'Mostrar más articulos...',
        pivot: false
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SHOW_ITEMS':
                return {
                    ...state,
                    product: filterData(12),
                    btnLoad: 'Mostrar menos... ',
                    pivot: true
                }

            case 'HIDE_ITEMS':
                return {
                    ...state,
                    product: filterData(8),
                    btnLoad: 'Cargar más articulos...',
                    pivot: false
                }

            default:
                console.log(new Error);
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const switchValues = () => {
        if (state.pivot === true) {
            dispatch({ type: 'HIDE_ITEMS' })
        } else if (state.pivot === false) {
            dispatch({ type: 'SHOW_ITEMS' })
        }
    }


    let modalPointerEvents = JSON.parse(localStorage.getItem("modal_events")) || [];
    const [FeaturedModal, setFeaturedModal] = useState({ Fstate: false, value: 0, items: {} });

    const ShowFeatured = (id, item) => {
        if (
            modalPointerEvents.Fstate === false ||
            modalPointerEvents.Fstate === []) {
            modalPointerEvents.Fstate = true;
        }

        setFeaturedModal({ Fstate: true, value: id, items: [] })
        //document.body.style.overflow = `${FeaturedModal ? 'initial' : 'hidden'}`;
        document.getElementById('center').style.pointerEvents = `${FeaturedModal.Fstate ? 'all' : 'none'}`;
        localStorage.setItem('modal_events', JSON.stringify({ Fstate: true, value: id, items: item }));
        document.getElementById('center').scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
    }

    useEffect(() => {
        setProducts(state.product);
    }, [state.pivot])

    return (
        <Container id='center' >
            <Titles>
                <Heading>Trending</Heading>
                <Titles_heading_3>Contenido elegido por ti</Titles_heading_3>
            </Titles>
            <Product_container >
                {FeaturedModal.Fstate && <Featured />
                }
                {Products.map(item => {
                    return <ProductItem clickFun={ShowFeatured} item={item} key={item.id} />
                })}
            </Product_container>
            <Btn onClick={switchValues}>{state.btnLoad}</Btn>
        </Container>

    )
}
