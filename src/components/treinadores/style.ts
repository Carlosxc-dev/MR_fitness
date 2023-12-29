import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  margin-top: 100px;
  position: relative;
  z-index: -1;
  padding-top: 40px;


  
  .imagem{
    position: absolute;
    z-index: -2;
    top: 0px;
	  opacity: 0.1;
    width: 100%;
  }

  .title {
    text-align: center;
    font-family: ${(props) => props.theme.fonts.fontTitle};
    font-size: ${(props) => props.theme.fonts.title};

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .subtitle {
    text-align: center;
    font-family: ${(props) => props.theme.fonts.fontSubTitle};
    font-size: ${(props) => props.theme.fonts.subtitle};
    padding: 0px 10px;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 20px;
    width: 100%;
	  margin-top: 50px;

    .item {
      border: 1px solid ${(props) => props.theme.colors.primary};
    }
  }

  @media only screen and (max-width : ${props => props.theme.screens.mobile_large}) {
    padding-bottom: 3rem;

    .title{
      font-size: 4rem;
    }
  }

`;
