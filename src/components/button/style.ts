import styled from "styled-components";

export const Conteiner = styled.div`

    
    a{
        background-color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.fonts.fontTitle};
        font-size: ${props => props.theme.fonts.button};
        width: 150px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        border: none;
        text-decoration: none;
        color: ${props => props.theme.colors.secundary};
    }

    @media only screen and (max-width : ${props => props.theme.screens.mobile_large}) {
        
    }
`
