import styled from "styled-components";

export const Conteiner = styled.div`
  margin-top: 72px;
  width: 100%;
  height: 100vh;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    z-index: -1;
    filter: opacity(20%);
  }

  .title {
    text-align: center;
    font-family: ${(props) => props.theme.fonts.fontTitle};
    font-size: ${(props) => props.theme.fonts.title};

    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .content {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding: 30px 100px;
  }

  .item {
    flex: 1 0 400px;
  }
`;
