import styled from "styled-components";

export const Conteiner = styled.div`
    
    
    .content{
        background-color: #222222;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        min-height: 400px;
        width: 280px;
        padding-top: 5px ;

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
            background-color: #222222;
            width: 100%;
            padding: 0 10px;
            display: flex;
            flex-direction: column;
            flex-grow:1;

            span{
                margin: .8rem 0;
            }
           
            
            
        }

        .btn{
            background-color: #222222;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-grow:1;
            border-radius: 0 0 15px 15px;
            padding-bottom: 10px;
            a{
                /* width: 120px;*/
                display: inline-block; 
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