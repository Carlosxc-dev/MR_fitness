import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: 4rem;

    .title {
      text-align: center;
      font-family: ${(props) => props.theme.fonts.fontTitle};
      font-size: ${(props) => props.theme.fonts.title};

      span {
        color: ${(props) => props.theme.colors.primary};
      }
  }

  .subtitle{
    text-align: center;
    font-family: ${(props) => props.theme.fonts.fontSubTitle};
    font-size: ${(props) => props.theme.fonts.subtitle};
  }

  
`