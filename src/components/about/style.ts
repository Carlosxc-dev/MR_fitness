import styled from "styled-components";

export const Conteiner = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    //grid-template-rows: 30% 70%;
    width: 100%;
    
    grid-template: 
        " title img" 
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
        width: 100%;
        margin-left: 77px;
        font-family:  ${props => props.theme.fonts.fontSubTitle};
        font-size: ${props => props.theme.fonts.subtitle};
        line-height: 24px; 
        font-feature-settings: 'clig' off, 'liga' off;
        
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

    @media only screen and (max-width : 380px) {

        grid-template-columns: 1fr;
        grid-template: 
        "img"
        "title" 
        "info" ;

        .img{
            display: none;
        }

        .info{
            display: none;
        }

        
    }
`