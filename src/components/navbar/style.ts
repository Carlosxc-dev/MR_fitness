import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 5px 0px; 
    background: transparent;
    /* position: fixed; */
    width: 100%;
    
    .logo{
        margin-left: 2.5rem;
        img{
            width: 4rem;
            height: 4rem;
            object-fit: cover;
        }
    }
    
    .nav{
        display: flex;
        justify-content: center;
        align-items: center;
        
        .item{
            font-size: ${props => props.theme.fonts.button};
            margin-right: 40px;
            cursor: pointer;
        }
        .item:nth-child(1){
            color: ${props => props.theme.colors.primary};
        }
    }
    
    @media only screen and (max-width :  ${props => props.theme.screens.mobile_large}) {
        .nav{
            display: none;
        }
    }


`