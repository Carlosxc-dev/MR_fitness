import styled from "styled-components";

export const Conteiner = styled.div`
    a{
        background-color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.fonts.fontTitle};
        font-size: ${props => props.theme.fonts.button};
        //padding: .8rem .8rem;
        display: inline-block;
        width: 100%;
        list-style: none;
        border: none;
        text-decoration: none;
        color: ${props => props.theme.colors.secundary};
    }

    @media only screen and (max-width : ${props => props.theme.screens.mobile_large}) {
        a{
            display: none;
        }
    }
`
