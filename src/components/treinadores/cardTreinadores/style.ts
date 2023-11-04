import styled from "styled-components";

export const Conteiner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	width: 330px;
	height: 480px;
  position: relative;

	.imagem3{
		position: absolute;
		bottom: 0px;
		width: 330px;
	  height: 480px;
    z-index: -1;
	}

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    opacity: 0.7;
    width: 100%;
    padding: 20px 0px;
    

    .title {
      font-family: ${(props) => props.theme.fonts.fontTitle};
      font-size: 38px;
      margin-bottom: 10px;
    }

    .info {
      font-family: ${(props) => props.theme.fonts.fontSubTitle};
      font-size: ${(props) => props.theme.fonts.subtitle};
      margin-bottom: 5px;
    }

    .img2{
      width: 130px;
      height: 25px;
    }
  }
`;
