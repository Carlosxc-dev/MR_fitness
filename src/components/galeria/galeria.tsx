import { Conteiner } from "./style";
import Caroucel from "../caroucel/caroucel"


export default function Galeria() {
  return (
    <Conteiner id='galeria'>
      <p className="title">
        Nossa
        <span> galeria</span>
      </p>
      <p className="subtitle">Explore Nossa Galeria de Imagens</p>

      <Caroucel />

    </Conteiner>
  );
}
