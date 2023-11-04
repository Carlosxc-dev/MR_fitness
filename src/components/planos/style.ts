import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    padding: 100px 0px;
    background: linear-gradient(180deg, #121212 0%, rgba(18, 18, 18, 0.22) 100%);
    background-color: #c3c3c3;

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

  .content{
    display: flex;
    justify-content: center;
    margin: 20px;
    /* gap: 20px; */
    align-items: center;
    /* background-color: #c3c3c3; */
  }
`