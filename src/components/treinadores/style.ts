import styled from "styled-components";

export const Conteiner = styled.div`
  width: 100%;
  height: 780px;
  margin-top: 100px;
  position: relative;
  z-index: -1;
  padding-top: 40px;
  
  .imagem{
    position: absolute;
    z-index: -2;
    top: 0px;
	  opacity: 0.1;
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
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0px 20px;
    width: 100%;
	  margin-top: 50px;

    .item {
      border: 1px solid ${(props) => props.theme.colors.primary};
    }
  }
`;
