import { Navbar } from "../components/Navbar";
import { Announcement } from "../components/Announcement";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Empty } from "../components/Empty";
import { ChevronRight } from '@material-ui/icons'
import { Mobile_XS, Mobile_XXS, Medium_Screen, LAPTOP_15PG_Screen, Large_Screen, XL_Screen, XXL_Screen, Wide, Total_Lined } from '../Responsive'

const Container = styled.div`
  height: "100vh";
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  ${Mobile_XXS({
    padding: '0.5rem'

})}
 ${Mobile_XS({
    padding: '0.5rem'

})}
`;
const Item_SUMMARY_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.gap};
  flex: 1;
  background-color: ${(props) => props.bg};
  cursor: pointer;
  ${Mobile_XXS({
    flexDirection: 'column',
    padding: '0 0.5rem',
    gap: '1rem'

})}
${Mobile_XS({
    flexDirection: 'column',
    padding: '0 0.5rem',
    gap: '1rem'

})}
${Medium_Screen({
    flexDirection: 'column',

})}
${Wide({
    flex: '0.6',

})}
`
const Sub_Summary = styled.h3`
  font-size: 24px;
  font-weight: 300;
  align-self: center;
  text-align: start;
  ${Mobile_XXS({
    fontWeight: '500',
    fontSize: '18px'
})}
${Mobile_XS({
    fontWeight: '500',
    fontSize: '18px'
})}
${Wide({
    fontWeight: '500',
    fontSize: '30px'
})}

`
const Title = styled.h1`
 margin:auto 0;
  font-size: 70px;

  ${Mobile_XXS({
    fontSize: '36px'
})}
${Mobile_XS({
    fontSize: '36px'
})}
${Medium_Screen({
    fontSize: '58px'
})}
`;

const Title_B = styled.h2`
  font-size: 58px;
  font-weight: 500;
  ${Mobile_XXS({
    fontSize: '36px'

})}
${Mobile_XS({
    fontSize: '36px'

})}
${Medium_Screen({
    fontSize: '48px'

})}

`
const Title_C = styled.h2`
  font-size: 40px;
  font-weight: 500;
  ${Mobile_XXS({
    fontSize: '36px'

})}
${Mobile_XS({
    fontSize: '36px'

})}


${Large_Screen({
    fontSize: '36px'

})}
${XL_Screen({
    fontSize: '30px'

})}
${Wide({
    fontSize: '48px'

})}
`
const Inner_Wrapper_Total = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flow};
  justify-content: space-between;
  gap: ${(props) => props.gap};
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.pd};
  ${Mobile_XXS({
    flexDirection: 'column'

})}
${Mobile_XS({
    flexDirection: 'column'

})}
 ${Large_Screen({
    flexDirection: 'column',
    gap: "0.5rem"
})}
 ${Total_Lined({
    flexDirection: 'row',
    gap: "0.5rem"
})}
`
const Inner_Wrapper_Titles = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flow};
  justify-content: space-between;
  gap: ${(props) => props.gap};
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.pd};
  ${Mobile_XXS({
    flexDirection: 'column'

})}
${Mobile_XS({
    flexDirection: 'column'

})}
`
const Inner_Wrapper_item_sub = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flow};
  justify-content: space-between;
  gap: ${(props) => props.gap};
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.pd};
    width: 35%;
  ${Mobile_XXS({
    width: '100%',
    flexDirection: 'column',
    gap: '0.5rem'

})}
${Mobile_XS({
    width: '100%',
    flexDirection: 'column',
    gap: '0.5rem'

})}
${Medium_Screen({
    width: '100%',
    flexDirection: 'column',
    gap: '0.5rem',
    flex: '2'

})}
`
const Inner_Wrapper_Subtitles = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flow};
  justify-content: space-between;
  gap: ${(props) => props.gap};
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.pd};

  ${Mobile_XXS({
    display: ' none'

})}
${Mobile_XS({
    display: ' none'

})}
${Medium_Screen({
    display: ' none'

})}
`
const Inner_Wrapper_Grid = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flow};
  justify-content: space-between;
  gap: ${(props) => props.gap};
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.pd};
  ${Large_Screen({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
    gridTemplateRows: 'auto',
    gap: '1rem'

})}  
  ${Wide({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr))',
    gridTemplateRows: 'auto',
    gap: '1rem'

})}  
`
const Inner_Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flow};
  justify-content: space-between;
  gap: ${(props) => props.gap};
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.pd};

`
const Inner_Wrapper_Item = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flow};
  justify-content: space-between;
  gap: ${(props) => props.gap};
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.pd};
  cursor: pointer;
  ${Mobile_XXS({
    flexDirection: 'column',
    padding: '0rem',

})}
 ${Mobile_XS({
    flexDirection: 'column',
    padding: '0rem'

})}
 ${Medium_Screen({
    flexDirection: 'column',
    padding: '0rem',
    gap: '1.5rem'

})}
`;
const Btn_Item = styled.button`
  padding: ${(props) => props.pd};
  background-color: ${(props) => props.bg};
  color: white;
  font-size: ${(props) => props.fz};
  cursor: pointer;
  transition: background-color 1s ease;
  border-radius: 10%;
  :hover {
    background-color: ${(props) => props.hbg};
  }
  ${Mobile_XXS({
    padding: '1rem',
    backgroundColor: 'red',
    color: 'white !important',
    borderRadius: '0'
})}
${Mobile_XS({
    padding: '1rem',
    backgroundColor: 'red',
    color: 'white !important',
    borderRadius: '0'
})}
${Medium_Screen({
    padding: '1rem',
    backgroundColor: 'red',
    color: 'white !important',
    borderRadius: '0'
})}
`;
const Btn = styled.button`
display:flex;
 justify-content: center;
 align-items:center;
  padding: ${(props) => props.pd};
  background-color: ${(props) => props.bg};
  color: white;
  font-size: ${(props) => props.fz};
  cursor: pointer;
  transition: background-color 1s ease;
  :hover {
    background-color: ${(props) => props.hbg};
  }
  ${Mobile_XXS({
    padding: '0.5rem',
    fontSize: '18px'
})}
${Mobile_XS({
    padding: '0.5rem',
    fontSize: '18px'
})}
`;
const Articles_Wrapper = styled.div`
  display: flex;
  padding: 2rem 0;
  gap: ${(props) => props.gap};
  ${Mobile_XXS({
    flexDirection: 'column'

})}
${Mobile_XS({
    flexDirection: 'column'

})}
${Medium_Screen({
    flexDirection: 'column'

})}
${Large_Screen({
    flexDirection: 'row'

})}
`;

const Inner_Sub = styled.h3`
  font-size: 24px;
  font-weight: 300;
  align-self: center;
  text-align: center;
  ${Mobile_XXS({
    fontWeight: '500',
    fontSize: '18px'
})}
${Mobile_XS({
    fontWeight: '500',
    fontSize: '18px'
})}
 ${Large_Screen({
    fontSize: '20px'
})}
 ${XL_Screen({
    fontSize: '20px'
})}
`
const Sub_TITLE = styled.h3`
  font-size: 24px;
  font-weight: 300;
  align-self: center;
 
  ${Mobile_XXS({
    backgroundColor: 'teal',
    color: 'white',
    padding: '0.5rem',
    textAlign: 'center',
    width: '100%',
    fontSize: '20px'
})}
${Mobile_XS({
    backgroundColor: 'teal',
    color: 'white',
    padding: '0.5rem',
    textAlign: 'center',
    width: '100%',
    fontSize: '20px'
})}
${Medium_Screen({
    backgroundColor: 'teal',
    color: 'white',
    padding: '0.5rem',
    textAlign: 'center',
    width: '100%'
})}
${Large_Screen({
    fontSize: "20px"
})}
`;
const Item_values_Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.gap};
  flex: ${(props) => props.flex};
  background-color: ${(props) => props.bg};
  cursor: pointer;
  ${Mobile_XXS({
    padding: '0 0.5rem'

})}
${Mobile_XS({
    padding: '0 0.5rem'

})}
${Medium_Screen({
    padding: '0 1rem'

})}


`
const Sub_Summaries = styled.h3`
  font-size: 24px;
  font-weight: 300;
  align-self: center;
  ${Mobile_XXS({
    padding: '0.5rem',
    textAlign: 'end',
    width: '100%',
    fontSize: '18px'
})}
 ${Mobile_XS({
    padding: '0.5rem',
    textAlign: 'end',
    width: '100%',
    fontSize: '18px'
})}
 ${Large_Screen({
    fontSize: '22px'
})}
${Wide({
    fontSize: '28px'
})}
`
const Sub = styled.h3`
  font-size: 24px;
  font-weight: 300;
  align-self: center;
  ${Mobile_XXS({
    padding: '0.5rem',
    textAlign: 'end',
    width: '100%',
    fontSize: '18px'
})}
 ${Mobile_XS({
    padding: '0.5rem',
    textAlign: 'end',
    width: '100%',
    fontSize: '18px'
})}

 ${Large_Screen({
    fontSize: '20px'
})}
 ${XL_Screen({
    fontSize: '20px'
})}
`
const Img_Preview = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  ${Mobile_XXS({
    width: '100%',
    height: '200px'
})}
 ${Mobile_XS({
    width: '100%',
    height: '200px'
})}
 ${Medium_Screen({
    width: '100%',
    height: '400px'
})}
 ${Large_Screen({
    width: '100%',
    height: '250px'
})}
`;

export const Cart = () => {
    const rawResult = JSON.parse(localStorage.getItem("added_items")) || [];
    const result = (rawResult !== [] ? rawResult.flat() : rawResult)
    const [Items, setItems] = useState(result)
    const [Counter, setCounter] = useState(0);
    const [EmptyDiv, setEmptyDiv] = useState(false);

    let commas, value;
    let Navigate = useNavigate();
    Counter === 0 ? commas = 0 : commas = Counter.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const clear_item = (id) => {
        const filteredItems = result.filter((item) => {
            return item.id != id
        })
        setItems(filteredItems);
        localStorage.removeItem('added_items');
        localStorage.setItem('added_items', JSON.stringify(filteredItems));
    }

    const total = () => {
        const reducer = (previousValue, currentValue) =>
            previousValue + currentValue;
        const total = Items.map((item) => {
            return item.qty * item.cost;
        });

        if (total.length > 0) {
            value = total.reduce(reducer).toFixed(2);
            return value;
        }
        else {
            value = 0;
            return value;
        }

    };
    useEffect(() => {
        if (Items === '' || Items.length === 0 || Items === undefined) {
            setEmptyDiv(!EmptyDiv)
        }

    }, [Items]);

    useEffect(() => {
        const fValue = total();
        setCounter(fValue);
    }, [Items]);

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Inner_Wrapper_Titles flow={"row"}>
                    <Title>Carrito</Title>
                    <Btn
                        fz={"24px"}
                        pd={"2rem"}
                        bg={"teal"}
                        hbg={"#0aa1a1"}
                        onClick={() => Navigate("/")}
                    >
                        Continuar Comprando <ChevronRight style={{ fontSize: '30px' }} />
                    </Btn>
                </Inner_Wrapper_Titles>
                <Articles_Wrapper gap={"2rem"}>
                    <Inner_Wrapper_Grid
                        flow={"column"}
                        flex={"2"}
                        gap={"2rem"}
                        style={{ justifyContent: "start" }}
                    >
                        <Inner_Wrapper_Subtitles
                            pd={"2rem"}
                            style={{
                                justifyContent: "space-evenly",
                                width: "85%",
                                textAlign: "center",
                            }}
                        >
                            <Sub style={{ flex: "4", textAlign: "start" }}>Producto</Sub>
                            <Sub style={{ flex: "1", textAlign: 'start' }}>Costo</Sub>
                            <Sub style={{ flex: "1.5" }}>Cantidad</Sub>
                            <Sub style={{ flex: "1", textAlign: "end" }}> Subtotal</Sub>
                        </Inner_Wrapper_Subtitles>
                        {EmptyDiv && <Empty />}
                        {Items.map((item) => {
                            return (
                                <Inner_Wrapper_Item
                                    key={item.id}
                                    bg={"whitesmoke"}
                                    pd={"2rem"}
                                    gap={'0.5rem'}
                                    style={{ justifyContent: "space-between" }}
                                >
                                    <Inner_Wrapper_item_sub>
                                        <Img_Preview src={item.img}></Img_Preview>
                                        <Sub_TITLE style={{ minWidth: "65%" }}>{item.name}</Sub_TITLE>
                                    </Inner_Wrapper_item_sub>

                                    <Item_values_Wrapper>
                                        <Inner_Sub> Unitario</Inner_Sub>
                                        <Sub>$ {item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Sub>
                                    </Item_values_Wrapper>

                                    <Item_values_Wrapper>
                                        <Inner_Sub>Cantidad</Inner_Sub>
                                        <Sub>{item.qty}</Sub>

                                    </Item_values_Wrapper>
                                    <Item_values_Wrapper>
                                        <Inner_Sub>Total</Inner_Sub>
                                        <Sub> $ {(item.cost * item.qty).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Sub>
                                    </Item_values_Wrapper>


                                    <Btn_Item
                                        fz={"24px"}
                                        pd={" 1rem"}
                                        bg={"transparent"}
                                        hbg={"red"}
                                        style={{
                                            color: "black",
                                            border: "none"
                                        }}
                                        onClick={() => clear_item(item.id)}
                                    >
                                        X
                                    </Btn_Item>
                                </Inner_Wrapper_Item>
                            );
                        })}
                    </Inner_Wrapper_Grid>
                    <Item_SUMMARY_Wrapper
                        gap={"2.5rem"}
                        flow={"column"}
                        style={{ height: "600px" }}
                    >
                        <Title_B>Sumario</Title_B>
                        <Inner_Wrapper>
                            <Sub_Summary>Subtotal</Sub_Summary>
                            <Sub_Summaries>${commas} MXN</Sub_Summaries>
                        </Inner_Wrapper>
                        <Inner_Wrapper>
                            <Sub_Summary>Envío</Sub_Summary>
                            <Sub_Summaries>Gratis</Sub_Summaries>
                        </Inner_Wrapper>
                        <Inner_Wrapper_Total>
                            <Title_C>Total</Title_C>
                            <Title_C style={{ fontWeight: '300' }}>${commas} MXN</Title_C>
                        </Inner_Wrapper_Total>
                        <Btn fz={"24px"} pd={"2rem"} bg={"teal"} hbg={"#0aa1a1"}>
                            Proceder
                        </Btn>
                    </Item_SUMMARY_Wrapper>
                </Articles_Wrapper>
            </Wrapper>
        </Container>
    );
};
