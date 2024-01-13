import styled from "styled-components";

export const Conteiner = styled.div`
    max-width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000000;
    padding: 20px 0px;

    p{
        font-family:  ${props => props.theme.fonts.fontSubTitle};
        padding: 10px 0px;

        a{
            color: ${props => props.theme.colors.primary};
            font-family:  ${props => props.theme.fonts.fontSubTitle};
            text-decoration: none;
        }
        
        a:hover{
            color: ${props => props.theme.colors.secundary};
            
        }
    }

 
    img{
        width: 10rem;
        height: 10rem;
        object-fit: cover;
    }

    .adress{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px 10px ;
        text-align: center;
    }
    
`