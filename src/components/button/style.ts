import styled from "styled-components";

export const Conteiner = styled.div`
    a{
        background-color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.fonts.fontTitle};
        font-size: ${props => props.theme.fonts.button};
        padding: 16px 40px;
        list-style: none;
        border: none;
        text-decoration: none;
        color: ${props => props.theme.colors.secundary};
    }

    @media only screen and (max-width : 380px) {
        a{
            display: none;
        }
    }
`
