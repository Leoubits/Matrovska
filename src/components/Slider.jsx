import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SliderData } from '../data/Data';
import { Mobile_XS } from '../Responsive';
import { Medium_Screen } from '../Responsive';
import { Large_Screen } from '../Responsive';
import { XL_Screen } from '../Responsive';
import { LAPTOP_15PG_Screen } from '../Responsive';
import { XXL_Screen } from '../Responsive';
import { Wide } from '../Responsive';

const Container = styled.div`
width: 100%;
height: 85vh;
display: flex;
position:relative;
overflow: hidden;
${Mobile_XS({ display: 'none' })}
${Medium_Screen({
    height: '100vh',
    flexDirection: 'column'
})}
${Large_Screen({
    flexDirection: 'initial',
    height: '85vh',
})}

${XL_Screen({
    height: '80vh',

})}
${XL_Screen({
    height: '88vh',

})}
${Wide({
    height: '88vh',
})}

`
const Arrow_Wrapper = styled.div`
height: 50px;
width: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
background-color: #e7e7e7;
cursor: pointer;
position:absolute;
top: 0;
bottom: 0;
left:${props => props.direction === 'left' && '10px'};
right:${props => props.direction === 'right' && '10px'};
margin:auto;
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition:transform 1s ease;
transform: translateX(${props => props.slideIndex * -100}vw);

`
const Slide = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: #${props => props.bg};
${Medium_Screen({
    height: '65vh',
    flexDirection: 'column'
})}
${Large_Screen({
    gap: '2rem'
})}
${XL_Screen({
    height: '103vh',
    flexDirection: 'row',
    gap: '0rem'
})}
${XL_Screen({
    height: '90vh',

})}

${LAPTOP_15PG_Screen({
    height: '95vh',

})}

${XXL_Screen({
    height: '100vh',

})}
${Wide({
    height: '110vh'
})}
`
const ImgWrapper = styled.div`
display:flex;
height: 100%;
width: 100%;
${Wide({
    width: '100%',
    alignItems: 'start'
})}
`
const Img = styled.img`
height: 80%;
${Medium_Screen({
    height: '100%',
    flexDirection: 'column',
    objectSize: 'cover',
    objectPosition: '0px 150px'

})}
${XL_Screen({
    objectPosition: 'initial',
    height: '80%'
})}
${Wide({
    height: '75%'
})}

`
const InfoWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: start;
padding: 4rem;
gap:2rem;
${Medium_Screen({
    gap: '1.7rem',
    padding: '1.5rem 3rem',
})}
${Large_Screen({
    gap: '2rem',
    padding: '3rem',
})}

`
const Title_wrapper = styled.div`
display: flex;
justify-content: center;
align-items: start;
flex-direction: column;
gap:0.5rem;
`
const Title = styled.h1`
font-size:70px;
color:#${props => props.fc};
${XL_Screen({ fontSize: '50px' })}
${XXL_Screen({ fontSize: '70px' })}
${Wide({ fontSize: '90px' })}
`
const Subtitle = styled.h3`
font-size:40px;
color: teal;
${XL_Screen({ fontSize: '32px' })}
${XXL_Screen({ fontSize: '48px' })}
`
const Description = styled.p`
font-size:24px;
font-weight:500;
letter-spacing:3px;
line-height:1.5;
${XL_Screen({ fontSize: '20px' })}
${XXL_Screen({ fontSize: '24px' })}
${Wide({ width: '80%' })}
`
const Button = styled.button`
background-color: #ff5e00;
font-weight: 600;
border: none;
color: white;
font-size: 24px;
padding: 0.8rem 2rem;
cursor: pointer;
${XL_Screen({ fontSize: '20px' })}
${XXL_Screen({ fontSize: '24px' })}
`

export const Slider = () => {
    const [Position, setPosition] = useState();
    const [oData, setoData] = useState(SliderData);

    const autoSlide = () => {
        setPosition(Position < 2 ? Position + 1 : 0);
    }

    const handleClick = (direction) => {
        if (direction === 'left') {
            setPosition(Position > 0 ? Position - 1 : 2)
        } else {
            setPosition(Position < 2 ? Position + 1 : 0)
        }
    }
    useEffect(() => {
        const oInterval = setInterval(() => {
            autoSlide();
        }, 4000);
        return () => {
            clearInterval(oInterval);
        }
    }, [Position])

    return (
        <Container>
            <Arrow_Wrapper direction="left" onClick={() => { handleClick('left') }}>
                < ArrowLeftOutlined style={{ cursor: 'pointer' }} />
            </Arrow_Wrapper>
            <Wrapper slideIndex={Position}>
                {oData.map((slide) => {
                    return (
                        <Slide bg={slide.bg} key={slide.id}>
                            <ImgWrapper>
                                <Img src={slide.img}></Img>
                            </ImgWrapper>
                            <InfoWrapper>
                                <Title_wrapper>
                                    <Title fc="000000">{slide.title} </Title>
                                    <Subtitle>{slide.sub}</Subtitle>
                                </Title_wrapper>
                                <Description>{slide.desc}</Description>
                                <Button>Conocer Más...</Button>
                            </InfoWrapper>
                        </Slide>
                    )
                })}

            </Wrapper>
            <Arrow_Wrapper direction="right" onClick={() => { handleClick('right') }}>
                < ArrowRightOutlined style={{ cursor: 'pointer' }} />
            </Arrow_Wrapper>
        </Container>
    )
}
