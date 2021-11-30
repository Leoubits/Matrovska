import React, { useState } from 'react'
import { CategoriesData } from '../data/Data'
import { CategoryItem } from './CategoryItem'
import styled from 'styled-components'
import { LAPTOP_15PG_Screen, Large_Screen, Mobile_XS, Total_Lined } from '../Responsive';
import { Mobile_XXS } from '../Responsive';
import { Medium_Screen } from '../Responsive';
import { Medium_Large_Screen } from '../Responsive';
import { XL_Screen } from '../Responsive';
import { XXL_Screen } from '../Responsive';

const Container = styled.div`
display: flex;
flex-direction: column;
${Medium_Screen({ gap: '1rem' })}
`
const Category_Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
grid-template-rows: auto;
padding: 2rem;
justify-content: center;
align-items: center;
height: auto;
gap: 2rem;
overflow:hidden;

${Mobile_XXS({
    gap: '0.5rem',
    padding: '0.5rem !important'
})}
${Mobile_XS({
    gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
    padding: '1rem'
})}
${Medium_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(700px,1fr))',
    gap: '3rem'
})}
${Medium_Large_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr)) ',
    gap: '3rem'
})}
${Large_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr)) ',
    gap: '1rem'
})}

${XL_Screen({
    gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr)) ',
    gap: '1rem'
})}
${Total_Lined({
    gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr)) ',
    gap: '1rem'
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
const Titles_heading = styled.h1`
font-size: 70px;
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

export const Categories = () => {

    const [oCategories, setoCategories] = useState(CategoriesData);
    return (
        <Container>
            <Titles>
                <Titles_heading>Categorías</Titles_heading>
                <Titles_heading_3>Aquí encontrarás nuestra selección</Titles_heading_3>
            </Titles>

            <Category_Container>
                {oCategories.map(item => {
                    return (
                        <CategoryItem item={item} key={item.id} />
                    )
                })}
            </Category_Container>
        </Container>

    )
}
