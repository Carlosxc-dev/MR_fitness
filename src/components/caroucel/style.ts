import styled from "styled-components";

export const Conteiner = styled.div`

    max-width: 60%;
    margin-top: 2rem;
    padding: 10px;

    img {
        width: 100%;
    }


    @media only screen and (max-width : ${props => props.theme.screens.tablet}) {
        max-width: 70%;
    }

    @media only screen and (max-width : ${props => props.theme.screens.mobile_large}) {
        max-width: 90%;
    }
`
