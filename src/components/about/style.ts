import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-template-rows: 30% 70%;
    
    grid-template: 
        "title img" 
        "info img" ;
         
    
    .title{
        grid-area: title;
        align-self: center;
        margin-left: 77px;
        font-family:  ${props => props.theme.fonts.fontTitle};
        font-size: ${props => props.theme.fonts.title};
        
        span{
            color: ${props => props.theme.colors.primary};
        }
    }
    .info{
        grid-area: info;
        margin-left: 77px;
        font-family:  ${props => props.theme.fonts.fontSubTitle};
        font-size: ${props => props.theme.fonts.subtitle};
        line-height: 24px; 
        
    }
    .img{
        grid-area: img;
        justify-self: center;
        align-self: center;
        position: relative;
        padding: 60px;

        img{
            position: relative;
            width: 384px;
            height: 496px;
            z-index: 99;
        }

        .retWhite{
            width: 384px;
            height: 496px;
            border: 1px solid ${props => props.theme.colors.primary};
            position: absolute;
            top: 10px;
            left: 10px;
            z-index: 0;
        }
        
        .retYellow{
            width: 384px;
            height: 496px;
            border: 1px solid ${props => props.theme.colors.secundary};
            position: absolute;
            bottom: 10px;
            right: 10px;
            z-index: 0;
        }
    }

    @media only screen and (max-width : ${props => props.theme.screens.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: 100%;
        grid-template: 
        "title" "img" "info" ;

        .title{
            margin-left: 0px;
            margin: auto;
        }

        .img{
            margin-bottom: 2rem;
        }

        .info{
            margin-left: 50px;
            margin: auto;
            width: 80%;
        }
    }


    @media only screen and (max-width : ${props => props.theme.screens.mobile_large}) {

        grid-template-columns: 1fr;
        grid-template-rows: 100%;
        grid-template: 
        "title" "img" "info" ;

        .img{
            .retWhite{display: none}
            .retYellow{display: none}
            grid-area: img;
            justify-self: center;
            align-self: center;
            padding: 0px;
            margin-top: 1rem;

            img{
                width: 280px;
                height: 400px;
                border: 1px solid ${props => props.theme.colors.primary};
            }
        }

        .info{
            margin-left: 0px;
            padding-right: 0px;
            margin: auto;

            p{
                width: 100%;
            }

        }

        .title{
            font-size: 4.5rem;
            margin: auto;
            p{
                width: 100%;
            }
        }

        
    }
`