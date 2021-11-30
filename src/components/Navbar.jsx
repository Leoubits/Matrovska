import React from 'react'
import styled from 'styled-components'
import { Search } from "@material-ui/icons";
import Badge from '@material-ui/core/Badge';
import { ShoppingCartOutlined, Menu } from '@material-ui/icons/';
import { Link, useNavigate } from 'react-router-dom'
import { Mobile_XS } from '../Responsive';
import { Mobile_XXS } from '../Responsive';
import { Medium_Screen } from '../Responsive';
import { Large_Screen } from '../Responsive';
import { XL_Screen } from '../Responsive';
import { XXL_Screen } from '../Responsive';
import { Wide } from '../Responsive';

const Container = styled.div`
height:100px;
display: flex;
justify-content: center;
align-items: center;
${XL_Screen({
    height: '90px'
})}

`
const Main_Wrapper = styled.div`
padding: 1rem 3rem;
display:flex;
justify-content: space-between;
width: 100%;
${Mobile_XS({ padding: '1rem' })}
${Mobile_XXS({ padding: '1rem' })}
${Medium_Screen({ padding: '1rem 1.5rem' })}
${XL_Screen({ padding: '0 1.5rem' })}
${XXL_Screen({ padding: '1rem 2rem' })}
`
const Item_first = styled.div`
flex: 1;
font-size:24px;
text-align: center;
display: flex;
justify-content: start;
align-items: center;
gap:2rem;
padding: 1rem;
${Mobile_XS({ display: 'none' })}
${Medium_Screen({ display: 'none' })}
${Large_Screen({ display: 'flex' })}
`
const Lng = styled.div`
font-size: 24px;
cursor: pointer;
${XL_Screen({
    fontSize: '20px',
})}
${XXL_Screen({
    fontSize: '24px',
})}
`
const SearchContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
`
const SearchInput = styled.input`
border: 1px solid lightgray;
font-size: 24px;
padding: 5px;
${Large_Screen({ fontSize: '20px', width: '100%' })}
${XXL_Screen({
    fontSize: '24px',
})}
`
const Item_second = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:2;
font-size:24px;
text-align: center;
padding: 1rem;
${Mobile_XS({ padding: '0' })}
${Medium_Screen({ paddingLeft: '0' })}
${Large_Screen({ flex: '2' })}
`
const Logo = styled.h1`
align-self: center;
font-weight: bold;
font-size: 36px;
position: relative;
transition: font-size 1s cubic-bezier(0.165, 0.84, 0.44, 1);

&:hover{
    font-size: 48px 
}
${Mobile_XXS({
    fontSize: '30px'
})}
${Medium_Screen({
    marginRight: 'auto',

})}
${Large_Screen({
    margin: 'auto',
})}
${XL_Screen({
    marginLeft: 'auto',
    fontSize: '32px',

})}
${XXL_Screen({
    fontSize: '36px',
})}
${Wide({
    fontSize: '60px',
})}
`
const Item_third = styled.div`
flex: 1;
font-size:24px;
text-align: center;
padding: 1rem;
display: flex;
justify-content: end;
align-items: center;
gap: 2rem;
${Mobile_XS({ display: 'none' })}
${Medium_Screen({ display: 'flex' })}
${Large_Screen({ display: 'flex', gap: '2rem' })}
`
const Item_fourth = styled.div`
flex: 1;
font-size:24px;
text-align: center;
padding: 1rem 0;
padding-right: 0.5rem;
display: none;
justify-content: end;
align-items: center;
gap: 2rem;
${Mobile_XS({ display: 'flex' })}
${Medium_Screen({ display: 'none' })}
${Large_Screen({ display: 'none' })}
`
const Menu_option_account = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 3rem;
${Large_Screen({ gap: '2rem' })}
`
const Menu_option = styled.div`
font-size: 24px;
cursor: pointer;
position: relative;
::after{
    content:'';
    position: absolute;
    width: 150%;
    height: 150%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
${XL_Screen({ fontSize: '20px', })}
${Wide({ fontSize: '24px', })}
`

export const Navbar = () => {
    const Navigate = useNavigate();
    const result = JSON.parse(localStorage.getItem('added_items')) || [];
    return (
        <Container>
            <Main_Wrapper>
                <Item_first>
                    <Lng>EN</Lng>
                    <SearchContainer>
                        <Search />
                        <SearchInput></SearchInput>
                    </SearchContainer>
                </Item_first>
                <Link to='/' style={{ display: "flex", flex: '1', textDecoration: 'none', color: 'inherit' }}>
                    <Item_second><Logo>Matrovska</Logo></Item_second>
                </Link>
                <Item_third>
                    <Menu_option_account>
                        <Menu_option onClick={() => Navigate('/Login')}>Registrarse</Menu_option>
                        <Menu_option onClick={() => Navigate('/Login')}>Login</Menu_option>
                    </Menu_option_account>
                    <Menu_option onClick={() => Navigate('/Cart')}>
                        <Badge badgeContent={result != '' ? result.length : 0} color="secondary">
                            <ShoppingCartOutlined style={{ fontSize: '30px', cursor: 'pointer' }} />
                        </Badge>
                    </Menu_option>
                </Item_third>
                <Item_fourth>
                    <Menu_option onClick={() => Navigate('/Cart')}>
                        <Badge badgeContent={result != '' ? result.length : 0} color="secondary">
                            <ShoppingCartOutlined style={{ fontSize: '30px', cursor: 'pointer' }} />
                        </Badge>
                    </Menu_option>
                </Item_fourth>
            </Main_Wrapper>
        </Container>

    )
}
