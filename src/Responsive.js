import { css } from "styled-components"

export const Wide = props => {
    return css`
    @media screen and (min-width:2524px){
        ${props}
    }
    `
}
export const XXL_Screen = props => {
    return css`
    @media screen and (min-width:1440px){
        ${props}
    }
    `
}
export const LAPTOP_15PG_Screen = props => {
    return css`
    @media screen and (min-width:1366px){
        ${props}
    }
    `
}
export const Total_Lined = props => {
    return css`
    @media screen and (min-width:1280px){
        ${props}
    }
    `
}
export const XL_Screen = props => {
    return css`
    @media screen and (min-width:1170px){
        ${props}
    }
    `
}

export const Large_Screen = props => {
    return css`
    @media screen and (min-width:1024px){
        ${props}
    }
    `
}

export const Medium_Large_Screen = props => {
    return css`
    @media screen and (min-width:800px){
        ${props}
    }
    `
}

export const Medium_Screen = props => {

    return css`
        @media screen and (min-width:576px){
            ${props}
        }
    `
}

export const Mobile_XS = props => {
    return css`
    
    @media screen and (max-width:576px){
        ${props}
    }
    
    `
}
export const Mobile_XXS = props => {
    return css`
    
    @media screen and (max-width:360px){
        ${props}
    }
    
    `
}
