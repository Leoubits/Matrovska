import React, { useReducer, useRef, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons'
import { initialState, Reducer } from '../components/fx/Reducer'
import { Modal } from '../components/Modal'
import CatalogData from '../data/Catalog';
import { Mobile_XS, Mobile_XXS, Medium_Screen, LAPTOP_15PG_Screen, Large_Screen, XL_Screen, XXL_Screen, Wide } from '../Responsive'
import { Video } from '../components/Video'
const Container = styled.div`
height: auto;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
padding: 1rem;
${Mobile_XXS({
    flexDirection: 'column'

})}
${Mobile_XS({
    flexDirection: 'column'

})}
${Medium_Screen({
    flexDirection: 'column',
    padding: '0 1.5rem'

})}
${Large_Screen({
    flexDirection: 'column',
    padding: '1rem 3rem'

})}
${XL_Screen({
    flexDirection: 'row',
    padding: '0rem 1rem',
    gap: '1.5rem',
    alignItems: 'center'

})}
${XXL_Screen({
    padding: '2rem 6rem',
    gap: '3.5rem',

})}
`
const Image_Wrapper = styled.div`
display: flex;
align-items: center;
height: 700px;
flex:1;
overflow: hidden;
position: relative;

${XL_Screen({
    flex: '0.8',
    height: '70vh',
    width: '350px',
    alignSelf: 'start'
})}

${LAPTOP_15PG_Screen({
    flex: '1.3',
    height: '75vh',
    width: '350px',
    alignSelf: 'start'
})}
${Wide({
    flex: '1.3 ',
    height: '75vh',
    alignSelf: 'start'
})}
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;

`
const Desc_Wrapper = styled.div`
display: flex;
flex-direction: column;
gap:2rem;
flex: 1;
padding: 0rem 2rem;
${Mobile_XXS({
    padding: '0rem',
    gap: '0.5rem'
})}
${Mobile_XS({
    padding: '0rem',
    gap: '0.5rem'
})}
${Medium_Screen({
    padding: '0rem !important',
    gap: '1rem',
})}
${XL_Screen({
    height: '70vh',
    padding: '0rem !important',
    gap: '1rem',
    justifyContent: 'start'
})}
${LAPTOP_15PG_Screen({
    height: '75vh',
    gap: '1rem',
    justifyContent: 'center'
})}
${Wide({
    height: '65vh',
})}
`
const Heading = styled.h1`
font-size:60px;


${Mobile_XS({
    fontSize: '40px'
})}
${Mobile_XXS({
    fontSize: '30px'
})}
${XL_Screen({
    fontSize: '40px'

})}
${XXL_Screen({
    fontSize: '70px'

})}
${Wide({
    fontSize: '90px'

})}
`
const Code = styled.h4`
font-size:20px;
font-weight: 300;
color: #a7a7a7;
${Mobile_XXS({
    fontSize: '18px'
})}
${Mobile_XS({
    fontSize: '20px'
})}
${XXL_Screen({
    fontSize: '24px'
})}
`
const Desc = styled.p`
font-size:24px;
font-weight: 300;
line-height: 1.3;
width: 85%;

${Mobile_XXS({
    fontSize: '16px',
    lineHeight: '1.5',
    width: '100%'
})}
${Mobile_XS({
    fontSize: '18px',
    lineHeight: '1.5',
    width: '100%'
})}
${XL_Screen({
    fontSize: '18px',
    lineHeight: '1.5',
    width: '85%'
})}
${LAPTOP_15PG_Screen({
    fontSize: '20px',
})}
${XXL_Screen({
    fontSize: '24px',

})}
${Wide({
    fontSize: '30px',

})}
`
const Price = styled.h1`
font-size:60px;
font-weight: 300;
padding: 0.5rem;


${Mobile_XS({
    fontSize: '48px',
    padding: '0.5rem 0'
})}
${Mobile_XXS({
    fontSize: '36px',
    padding: '0.5rem 0'
})}
${Medium_Screen({
    padding: '0.5rem 0'
})}
${XL_Screen({
    fontSize: '48px',
    padding: ' 0'
})}
${XXL_Screen({
    fontSize: '70px'
})}
`
const Variations = styled.div`
display: flex;
justify-content: space-between;
gap: 1rem;
${Mobile_XXS({
    flexDirection: 'column'
})}
${Mobile_XS({
    flexDirection: 'column'
})}
`
const Inner_Wrapper = styled.div`
display: flex;
flex-direction: ${props => props.flow};
justify-content: ${props => props.flow === 'column' && 'start'};
align-items: ${props => props.flow === 'column' && 'start'};
gap: ${props => props.gap};
padding: 0.5rem;
flex:${props => props.flex && '1'};
${Mobile_XXS({
    padding: '0.5rem 0'
})}
${Mobile_XS({
    padding: '0.5rem 0'
})}
${Medium_Screen({
    padding: '1rem 0'
})}
${XL_Screen({
    padding: '0'
})}
`
const Subtitle = styled.h3`
font-size:24px;
font-weight: 300;
align-self: center;

${Mobile_XS({
    fontSize: '20px',
    marginRight: 'auto'
})}
${Mobile_XXS({
    fontSize: '18px',
    marginRight: 'auto'
})}
${XL_Screen({
    fontSize: '18px'
})}
${XXL_Screen({
    fontSize: '28px'
})}
${Wide({
    fontSize: '32px'
})}
`
const Color_Option = styled.div`
display: flex;
gap: 1rem;
border-radius: 100%;
width: 30px;
height: 30px;
cursor: pointer;
background-color: ${props => props.bg};

${Mobile_XS({
    height: '30px',
    width: '30px',

})}
${Mobile_XXS({
    height: '25px',
    width: '25px',

})}
${XL_Screen({
    height: '30px',
    width: '30px',
    alignSelf: 'center'
})}
`
const Talla = styled.select`
width: 35%;
font-size: 20px;
cursor: pointer;

${Mobile_XS({
    fontSize: '20px',
    width: 'calc(45% + 1rem)',
})}
${Mobile_XXS({
    fontSize: '16px',
})}
${Medium_Screen({
    width: '70%',
})}
${XL_Screen({
    fontSize: '18px',
    width: '30%',
})}
${Wide({
    fontSize: '24px',
})}
`
const Inner_Wrapper_Size = styled.div`
display: flex;
flex-direction: ${props => props.flow};
justify-content: ${props => props.flow === 'column' && 'start'};
align-items: ${props => props.flow === 'column' && 'start'};
gap: ${props => props.gap};
padding: 0.5rem;
flex:${props => props.flex && '1'};

${Mobile_XXS({
    justifyContent: 'start',
    padding: '0.5rem 0'
})}
${Mobile_XS({
    justifyContent: 'start',
    padding: '0.5rem 0'
})}
${Medium_Screen({
    justifyContent: 'end',
})}
`
const Talla_Opt = styled.option`
cursor: pointer;

`
const Cantidad_Input = styled.input`
font-size: 20px;
width: 10%;
padding: 0.5rem;
margin: 0.5rem 0;

${Mobile_XS({
    width: 'calc(34% + 1rem)',
    fontSize: '20px',
    padding: '0 0.5rem',
})}
${Mobile_XXS({
    width: '30%',
    fontSize: '16px',
    padding: '0 0.5rem',
})}
${Medium_Screen({
    width: '40%',
})}
${XL_Screen({
    fontSize: '18px',
    width: '20%',
    margin: '0'
})}
${XXL_Screen({
    margin: '0',
    fontSize: '24px'
})}
`
const Spinner = styled.button`
font-size: 20px;
flex:1;
width: 30px;
cursor: pointer;
border: 1px solid #b4b4b4;
${Mobile_XXS({
    fontSize: '16px'
})}
${Mobile_XS({
    fontSize: '18px'
})}
${XL_Screen({
    fontSize: '10px',
})}
`
const Buy = styled.button`
background-color: teal;
color: white;
flex: 1;
font-size: 24px;
cursor: pointer;
border: none;
${Mobile_XXS({
    padding: '2rem',
    fontSize: '18px'
})}
${Mobile_XS({
    padding: '2rem',
    fontSize: '20px'
})}
${Medium_Screen({
    padding: '2rem',
    fontSize: '24px', justifyContent: 'end'
})}
${LAPTOP_15PG_Screen({
    flex: '0.5',
    marginTop: 'auto'
})}

${Wide({
    fontSize: '30px'
})}
`
export const SingleProduct = () => {

    let { state } = useLocation();
    state === undefined || state === null ? state = CatalogData[0].collection[0] : state = state;
    const refQty = useRef();
    const [Qty, setQty] = useState(1);
    const [stateItem, dispatch] = useReducer(Reducer, initialState)

    const handleClick = () => {
        let newItem = { id: state.id, name: state.name, code: state.code, cost: state.cost, img: state.img, qty: Qty }
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        dispatch({ type: 'SHOW_MODAL' })
    }

    const CLS_MDL = () => {
        dispatch({ type: 'CLOSE_MODAL' });
    }
    const qtyUpdater = (props) => {
        if (Qty === 1 && props === 'down') {
            setQty(1);

        } else {
            setQty(props === 'up' ? Qty + 1 : Qty - 1);
        }

    }
    const updateQtyValue = () => {
        const value = refQty.current.value;
        setQty(value);
    }
    return (
        <Container>
            <Navbar></Navbar>
            <Announcement />
            <Wrapper>
                <Image_Wrapper>
                    {stateItem.showModal && <Modal cls_mdl={CLS_MDL} />}
                    <Image src={state.img}></Image>
                </Image_Wrapper>
                <Desc_Wrapper>
                    <Inner_Wrapper flow={'column'} gap={'0.5rem'}>
                        <Heading>{state.name}</Heading>
                        <Code>{state.code}</Code>
                    </Inner_Wrapper>
                    <Desc>Te proporcionamos la mejor calidad disponible en el mercado ya que nuestras prendas están respaldadas por las mejores marcas del mundo. De todo tipo de material para satisfacer el gusto más selecto.</Desc>
                    <Price>${state.cost} MXN</Price>
                    <Variations>
                        <Inner_Wrapper wdt={'color'} flow={'row'} gap={'1rem'} flex={true}>
                            <Subtitle>Color</Subtitle>
                            <Color_Option bg={'#333'} />
                            <Color_Option bg={'#345644'} />
                            <Color_Option bg={'#984253'} />
                        </Inner_Wrapper>
                        <Inner_Wrapper_Size flow={'row'} gap={'1rem'} flex={true} >
                            <Subtitle>Talla</Subtitle>
                            <Talla>
                                <Talla_Opt>XL</Talla_Opt>
                                <Talla_Opt>L</Talla_Opt>
                                <Talla_Opt>M</Talla_Opt>
                                <Talla_Opt>S</Talla_Opt>
                                <Talla_Opt>XS</Talla_Opt>
                            </Talla>
                        </Inner_Wrapper_Size>
                    </Variations>
                    <Inner_Wrapper flow={'row'} gap={'0.5rem'}>
                        <Subtitle>Cantidad</Subtitle>
                        <Cantidad_Input ref={refQty} type='number' value={Qty} onChange={updateQtyValue} ></Cantidad_Input>
                        <Inner_Wrapper flow={'column'} gap={'0rem'}>
                            <Spinner onClick={() => qtyUpdater('up')}><KeyboardArrowUp /></Spinner>
                            <Spinner onClick={() => qtyUpdater('down')}><KeyboardArrowDown /></Spinner>
                        </Inner_Wrapper>
                    </Inner_Wrapper>
                    <Buy type="button" onClick={handleClick}>Añadir al Carrito</Buy>
                </Desc_Wrapper>
            </Wrapper>
            <Video />
            <Newsletter />
            <Footer />
        </Container>
    )
}
