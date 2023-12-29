import styled from "styled-components";

export const Conteiner = styled.div`
    max-width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000000;

    p{
        font-family:  ${props => props.theme.fonts.fontSubTitle};

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
    
`