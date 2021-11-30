import React from 'react'
import styled from 'styled-components'
import { Medium_Screen, Mobile_XS, Mobile_XXS } from '../Responsive'

const Container = styled.div`
height:80vh;
display:'none';

${Mobile_XXS({
    display: 'flex',
})}
${Mobile_XS({
    display: 'flex',
})}
${Medium_Screen({
    display: 'none',
})}

`
const Img_Wrapper = styled.div`
height:100%;
width:100%;
position: relative;
`
const Img = styled.img`
height:100%;
width:100%;
object-fit: cover;

`
const Note = styled.h3`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
bottom:0%;
left: 50%;
background-color: #bb6402;
transform : translate(-50%,-0%);
font-size: 18px;
color: white;
width: 100%;
height: 50px;
text-shadow: 1px 1px 1px black;

`
const Inner_Wrapper_f = styled.div`
display: flex;
justify-content:end;
align-items: center;
position: absolute;
border-radius: 0 5px 5px 0;
padding-right:1rem;
height: 50px;
top:5%;
left: 0%;
background-color: #f80000;
box-shadow: 3px 3px 8px black;
background-blend-mode: difference;
background-image: url('https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');


${Mobile_XS({
    width: '50%',
    top: '10%'
})}



`
const Art = styled.h3`
font-size: 16px;
color: white;
width: auto;
text-shadow: 1px 1px 1px black;

${Mobile_XS({
    fontSize: '24px',

})}
`
const Inner_Wrapper = styled.div`
display: flex;
justify-content:start;
align-items: center;
position: absolute;
border-radius:  5px 0 0 5px;
padding-left:1rem;
height: 50px;
bottom:25%;
right: 0%;
box-shadow: 3px 3px 8px black;
 background-color: #f8f400; 
background-blend-mode: difference;
background-image: url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');


${Mobile_XS({
    fontSize: '24px',
    width: '70%',
    bottom: '25%',
})}
`
const Art_2 = styled.h3`
font-size: 16px;
color: black;
width: auto;
align-self: 'center';
${Mobile_XS({
    fontSize: '24px',
})}
`

export const Mob_Showcase = () => {
    return (
        <Container>
            <Img_Wrapper>
                <Img src="https://images.unsplash.com/photo-1583766395091-2eb9994ed094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></Img>
                <Note>Refresca tu look</Note>
                <Inner_Wrapper_f>
                    <Art>Aretes Goux</Art>
                </Inner_Wrapper_f>
                <Inner_Wrapper>
                    <Art_2>Labial Chantoné</Art_2>
                </Inner_Wrapper>

            </Img_Wrapper>
        </Container>
    )
}
