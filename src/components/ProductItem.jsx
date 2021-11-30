import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InfoOutlined } from "@material-ui/icons";
import { FavoriteBorderOutlined, FavoriteSharp } from "@material-ui/icons";
import { ShoppingBasketOutlined } from "@material-ui/icons";
import { LAPTOP_15PG_Screen, Medium_Screen, Mobile_XS, Total_Lined, Wide, XXL_Screen } from '../Responsive';
import { Mobile_XXS } from '../Responsive';
import { useNavigate } from 'react-router';

const Icon_wrapper = styled.div`
height: auto;
display:flex;
gap:1rem;
position: absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
opacity:0;
transition: opacity 1s ease;
`
const Image_wrapper = styled.div`
height: 500px;
width:100%;
overflow: hidden;
${Mobile_XS({ height: '300px' })}
${Medium_Screen({ height: '400px' })}
${Total_Lined({ height: '350px' })}
${LAPTOP_15PG_Screen({ height: '300px' })}
${XXL_Screen({ height: '400px' })}
${Wide({ height: '600px' })}
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 1s ease,filter 1s ease;
    cursor: pointer;
`
const Container = styled.div`
height: 100%;
display: flex;
gap: 1rem;
position: relative;

&:hover > ${Icon_wrapper} {
    opacity: 1
}
&:hover > ${Image_wrapper}> ${Image} {
    transform: scale(1.1);
    filter: brightness(0.6);

}
${Mobile_XS({ padding: '0 0.5rem', height: 'auto' })}
${Mobile_XXS({ padding: '0 0.5rem' })}
`
const Icon = styled.div`
padding: 1rem;
background-color: white;
transition:transform 0.5s ease;
cursor:pointer;
&:hover{
    transform: scale(1.05);
}
`

export const ProductItem = ({ item, clickFun }) => {
    const { id, img } = item;
    const [Like, setLike] = useState(true)
    let navigate = useNavigate()
    const handleClick = (props) => {
        if (props === 'Search') {
            if (document.querySelector('#Modal') === null) {
                // clickFun(id, item);
                navigate('/Catalog')
            } else {
                document.querySelector('#Modal').style.opacity = `1`;
                document.querySelector('#Modal').style.pointerEvents = `all`;
                document.getElementById('center').style.pointerEvents = `none`;
                clickFun(id, item);
            }

        } else if (props === 'Like') {
            setLike(!Like);
        } else if (props === 'Shop') {

        }
    }

    return (
        <Container >
            <Image_wrapper >
                <Image src={img}></Image>
            </Image_wrapper>
            < Icon_wrapper>
                <Icon onClick={() => handleClick('Search')} ><InfoOutlined
                    style={{ zIndex: '3', fontSize: '40px', cursor: 'pointer' }} /></Icon>
                <Icon onClick={() => handleClick('Like')} >
                    {Like && <FavoriteBorderOutlined style={{
                        zIndex: '3', fontSize: '40px', cursor: 'pointer'
                    }} />}
                    {!Like && <FavoriteSharp style={{ zIndex: '3', fontSize: '40px', cursor: 'pointer' }} />}
                </Icon>
                {/* <Icon onClick={() => handleClick('Shop')} ><ShoppingBasketOutlined
                    style={{ zIndex: '3', fontSize: '40px', cursor: 'pointer' }} /></Icon> */}
            </ Icon_wrapper>
        </Container>
    )
}
