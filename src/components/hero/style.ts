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

    @media only screen and (max-width : ${props => props.theme.screens.mobile_large}) {

        top: 60px;
        left: 40px;

        .title{
            font-size: ${props => props.theme.fonts.fontSubTitle};
        }
        .subTitle{
            display: none;
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

    @media only screen and (max-width : 380px) {
        flex-direction: column;
        align-items: flex-start;
        .bloco{
            margin-top: 5px;
            align-items: flex-start;
        
        }

        .bloco:nth-child(1) {
            border-right: none;
        }
        .bloco:nth-child(2) {
            border-right: none;
        }
    }
    

`