import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 15px 25px;
    border: 1px solid ${props => props.theme.colors.primary};

    .number{
        font-size: 38px;
        
    }
    .title{
        color: ${props => props.theme.colors.primary};
        font-size: 28px;
    }
    span{
        font-family:  ${props => props.theme.fonts.fontSubTitle};
        font-size:  ${props => props.theme.fonts.subtitle};
        
    }

    @media only screen and (max-width : ${props => props.theme.screens.mobile_large}) {

        
    }
`