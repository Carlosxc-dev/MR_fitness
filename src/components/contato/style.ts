import styled from "styled-components";
import img from '../../assets/contact_retangulo.png'

export const Conteiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    background-color: #222222;
    padding: 60px 0px;
    
    .content{
        width: 1100px;
        height: 604px;
        background-image: url(${img});
        background-size: cover;
        position: relative;

        img{
            position: absolute;
            top: -125px;
        }

        .contact{
            position: absolute;
            right: 100px;
            top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            .title {
                font-family: ${(props) => props.theme.fonts.fontTitle};
                font-size: ${(props) => props.theme.fonts.title};
    
                span {
                    color: ${(props) => props.theme.colors.primary};
                    
                }
            }
            .subtitle{
                font-family: ${(props) => props.theme.fonts.fontSubTitle};
                font-size: ${(props) => props.theme.fonts.subtitle};
            }
        }

        .btn1{
            margin-top: 30px;
            
        }

        
    }

    @media only screen and (max-width : 380px) {
        .content{
            display: none;
        }

        
    }


    
`