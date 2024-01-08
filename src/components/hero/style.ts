import styled from "styled-components";
// import img from '../../assets/hero.jpg';


export const Conteiner = styled.div`
    width: 100%;
    position: relative;
    
    /* margin: -70px;    */

    img{
        opacity: 0.3;
        width: 100%;
    }

    @media only screen and (max-width : ${props => props.theme.screens.laptop_medium}) {
        
        img{
           height: 800px;
        }
    }

    @media only screen and (max-width : 380px) {
        img{
           height: 600px;
        }
    }
`
export const Content = styled.div`
    position: absolute;
    top: 120px;
    left: 77px;

    .title{
        font-size: ${props => props.theme.fonts.title};
    }
    
    .pri{
        color:  ${props => props.theme.colors.primary};
    }

    .subTitle{
        font-family:  ${props => props.theme.fonts.fontSubTitle};
        width: 660px;
        color: ${props => props.theme.colors.txt};
    }
    
    .btn {
        margin-top: 32px;
    }
    
    
    @media only screen and (max-width : ${props => props.theme.screens.laptop_medium}) {
        top: 40px;
    }

    @media only screen and (max-width : ${props => props.theme.screens.tablet}) {
        .subTitle{
            width: 480px;
        }

    }

    @media only screen and (max-width : ${props => props.theme.screens.mobile_large}) {

        top: 60px;
        left: 40px;

        .title{
            font-size: 5.5rem;
            margin-bottom: 3rem;
        }
        .subTitle{
            //display: none;
            width: 80%;
            text-align: justify;
            line-height: 2rem;
        }
        .btn{
            display: none;
        }
    }

    @media only screen and (max-width : ${props => props.theme.screens.mobile_medium}) {
        top: 30px;
        left: 20px;
        .title{
            font-size: 4rem;
        }
    }


    
`

export const Infos = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .bloco{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px 19px;
        margin-top: 50px;
    }

    .bloco > div:nth-child(1){
        color: ${props => props.theme.colors.primary};
        font-size: 50px;
    }
    .bloco > div:nth-child(2){
        font-family: ${props => props.theme.fonts.fontSubTitle};
        font-size: ${props => props.theme.fonts.subtitle};
        color: ${props => props.theme.colors.txt};
    }
    .bloco:nth-child(1) {
        border-right: 1px solid ${props => props.theme.colors.secundary};
    }
    .bloco:nth-child(2) {
        border-right: 1px solid ${props => props.theme.colors.secundary};
    }

    @media only screen and (max-width : ${props => props.theme.screens.tablet}) {
        .bloco{
            margin-top: 1.6rem;
        }
        
        :nth-child(1){
            padding-left: 0px;
            
        }
    }
    

    @media only screen and (max-width : ${props => props.theme.screens.mobile_large}) {
        flex-direction: column;
        align-items: flex-start;
        .bloco{
            margin-top: 1.6rem;
            padding: 0px 0px;
            width: 50%;
        
        }

        .bloco:nth-child(1) {
            border-right: none;
        }
        .bloco:nth-child(2) {
            border-right: none;
        }
    }

    @media only screen and (max-width : ${props => props.theme.screens.mobile_medium}) {

        .bloco > div:nth-child(1){
            font-size: 40px;
        }

        .bloco > div:nth-child(2){
            font-size: .8rem;
        }
    }
    

`