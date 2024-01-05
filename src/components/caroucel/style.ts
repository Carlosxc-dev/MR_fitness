import styled from "styled-components";

export const Conteiner = styled.div`

    max-width: 60%;
    margin-top: 2rem;
    /* border: 2px solid ${(props) => props.theme.colors.primary}; */
    border: 2px solid transparent;
    border-image: linear-gradient(to right, ${(props) => props.theme.colors.primary}, ${(props) => props.theme.colors.secundary});
    border-image-slice: 1;

    img {
        width: 100%;
    }

    .video {
        width: 100%;
        height: 780px;
    }


    @media only screen and (max-width : ${props => props.theme.screens.tablet}) {
        max-width: 70%;
    }

    @media only screen and (max-width : ${props => props.theme.screens.mobile_large}) {
        max-width: 90%;
    }
`
