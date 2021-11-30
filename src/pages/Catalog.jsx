import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import { Newsletter } from '../components/Newsletter'
import { Footer } from '../components/Footer'
import { useLocation, useNavigate } from 'react-router-dom';
import CatalogData from '../data/Catalog';
import styled from 'styled-components'
import { Mobile_XS, Mobile_XXS, Medium_Screen, Medium_Large_Screen, XXL_Screen, Wide } from '../Responsive'
import { Video } from '../components/Video'

const Container = styled.div`
height:100vh;
`
const Title_Container = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 2rem;
${Mobile_XS({
    padding: '1rem'
})}
`
const Item_Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
grid-template-rows: 500px;
gap: 5rem 1rem;
padding: 1rem 2rem;
${Mobile_XXS({
    gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))',
    gridTemplateRows: '250px',
    padding: '1rem',
    gap: '1rem'
})}
${Mobile_XS({
    gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))',
    gridTemplateRows: '300px',
    padding: '1rem',
    gap: '1rem'
})}
${Medium_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))',
    gridTemplateRows: '300px',
    padding: '1rem',
    gap: '1rem'
})}
${Medium_Large_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
    gridTemplateRows: '350px',
    padding: '1rem',
    gap: '1rem'
})}
${XXL_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr))',
    gridTemplateRows: '550px',
    padding: '1rem',
    gap: '1rem'
})}
${Wide({
    gridTemplateColumns: 'repeat(auto-fit,minmax(500px,1fr))',
    gridTemplateRows: '550px',
    padding: '1rem',
    gap: '1rem'
})}
`
const Img_wrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
cursor: pointer;
 ${Mobile_XXS({
    height: '250px',
})} 
 ${Mobile_XS({
    height: '300px',
})} 
 ${Medium_Screen({
    height: '300px',
})} 
 ${Medium_Large_Screen({
    height: '350px',
})} 
 ${XXL_Screen({
    height: '550px',
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
const Filter_Wrapper = styled.div`
display: flex;
justify-content: center;
gap: 2rem;
width: 100%;
${Mobile_XXS({
    flexDirection: 'column',
    gap: '1rem'
})}
${Mobile_XS({
    flexDirection: 'column',
    gap: '1rem'
})}

`
const Heading = styled.h1`
font-size: 70px;
background-color: teal;
color: white;
padding: 0.5rem;
${Mobile_XXS({
    fontSize: "48px"
})}
${Mobile_XS({
    fontSize: "48px"
})}
${Medium_Screen({
    margin: 'auto',
    textAlign: 'center',
    width: '80%'
})}

 ${XXL_Screen({
    width: '50%'
})} 
`
const Filter_Left = styled.h3`
display: flex;
font-size:24px;
font-weight:300;
width: 30%;
gap: 1rem;

${Mobile_XS({
    fontSize: '20px',
    justifyContent: 'space-between',
    width: '100%'
})}
${Mobile_XXS({
    fontSize: '18px',
    justifyContent: 'space-between',
    width: '100%'
})}
${Medium_Screen({
    width: '40%'
})}
 ${XXL_Screen({
    width: '20%'
})} 
`
const Filter_Right = styled.h3`
display: flex;
font-size:24px;
width: 30%;
gap: 1rem;
font-weight: 300;
${Mobile_XXS({
    fontSize: '18px',
    justifyContent: 'space-between',
    width: '100%'
})}
${Mobile_XS({
    fontSize: '20px',
    justifyContent: 'space-between',
    width: '100%'
})}
${Medium_Screen({
    width: '40%'
})}
 ${XXL_Screen({
    width: '20%'
})} 
`
const Select = styled.select`
font-size: 20px;
width: 100%;
${Mobile_XXS({
    fontSize: '18px',
    width: '60%'
})}
${Mobile_XS({
    fontSize: '18px',
    width: '60%'
})}
`
const Option = styled.option`

`

export const Catalog = () => {
    let { state } = useLocation();
    const navigate = useNavigate();
    const [element, setelement] = useState([{ category: 'Camisas', data: CatalogData[0] }])
    state === '' || state === [] || state === undefined || state === null ? state = element : state = state;
    const [Items, setItems] = useState(state)
    const category = Items[0].category;
    const data = Items[0].data.collection;

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title_Container >
                <Heading>{category}</Heading>
                <Filter_Wrapper>
                    <Filter_Left>
                        Color
                        <Select>
                            <Option>Black</Option>
                            <Option>Blue</Option>
                            <Option>Brown</Option>
                            <Option>Golden</Option>
                            <Option>Gray</Option>
                            <Option>Red</Option>
                            <Option>White</Option>
                        </Select>
                    </Filter_Left>
                    <Filter_Right>Ordenar
                        <Select>
                            <Option>Menor Precio</Option>
                            <Option>Mayor Precio</Option>
                            <Option>Nuevo</Option>
                            <Option>Popular</Option>
                        </Select>
                    </Filter_Right>
                </Filter_Wrapper>
            </Title_Container>
            <Item_Container>
                {data.map((item) => {
                    const { id, img } = item;
                    return (
                        <Img_wrapper key={id}>
                            <Image src={img} onClick={() => navigate('/SingleProduct', { state: item })}></Image>
                        </Img_wrapper>
                    )
                })}
            </Item_Container>
            <Video />
            <Newsletter />
            <Footer />

        </Container>
    )
}
