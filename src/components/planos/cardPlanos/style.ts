import styled from "styled-components";

export const Conteiner = styled.div`
    
    
    .content{
        background-color: #222222;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        height: 400px;
        width: 300px;
        padding: 2px;

        transition-duration: 0.5s;
        transition-timing-function: ease-in;
        
        
        .one{
            transition-duration: 0.5s;

            border-radius: 15px 15px 0px 0px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-family: ${(props) => props.theme.fonts.fontTitle};
            font-size: ${(props) => props.theme.fonts.button};
            border-bottom: 1.5px solid #000000;
            flex-grow:1;
            
            span{
                font-family: ${(props) => props.theme.fonts.fontSubTitle};

            }

        }


        .infos{
            font-family: ${(props) => props.theme.fonts.fontSubTitle};
            font-size: 13px;
            line-height: 50px;
            background-color: #222222;
            width: 100%;
            flex-grow:1;
            padding: 0 10px;
            
            
        }

        .btn{
            background-color: #222222;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-grow:1;
            border-radius: 0 0 15px 15px;
            a{
                width: 107px;
                height: 30px;
                padding: 6px 49px 6px 38px;
                border-radius: 30px;
                background-color: ${(props) => props.theme.colors.primary};
                color: ${(props) => props.theme.colors.secundary};
                cursor: pointer;
                text-decoration: none;
            }
            
        }
    }

    .content:hover{
        background-color: ${(props) => props.theme.colors.primary};

        .one{
            border-right: 2px solid #000000;
        }
    }

`