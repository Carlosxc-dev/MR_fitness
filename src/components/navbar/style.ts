import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 5px 10px; 
    background: transparent;
    /* position: fixed; */
    width: 100%;
    
    .logo{
        img{
            width: 4rem;
            height: 4rem;
            object-fit: cover;
        }
    }
    
    .nav{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 80%;
        
        .item{
            font-size: ${props => props.theme.fonts.button};
            //margin-right: 40px;
            cursor: pointer;
        }
        .item:nth-child(1){
            color: ${props => props.theme.colors.primary};
        }
    }
    
    @media only screen and (max-width :  ${props => props.theme.screens.tablet}) {

        padding: 5px 10px;
        .nav{
            display: none;
        }
        .logo{
            margin-left: 0;
        }
    }


`