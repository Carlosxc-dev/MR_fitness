import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.secundary};
    padding: 5px 0px; 
    background: transparent;
    /* position: fixed; */
    width: 100%;
    

    .logo{
        img{
            width: 3rem;
            height: 3rem;
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
    
    


`