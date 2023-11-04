import { Conteiner } from "./style";
import img2 from '../../assets/galeria/image 2.jpg'
import img3 from '../../assets/galeria/image 3.jpg'
import img4 from '../../assets/galeria/image 4.jpg'
import img5 from '../../assets/galeria/image 5.jpg'
import img6 from '../../assets/galeria/image 6.jpg'
import img7 from '../../assets/galeria/image 7.jpg'

export default function Galeria() {
  return (
    <Conteiner id='galeria'>
      <p className="title">
        Nossa
        <span> galeria</span>
      </p>
      <p className="subtitle">Explore Nossa Galeria de Imagens</p>

      <div className="imgConteiner">
        <img className="item" src={img2} alt="imagem de academia" />
        <img className="item" src={img3} alt="imagem de academia" />
        <img className="item" src={img4} alt="imagem de academia" />
        <img className="item" src={img5} alt="imagem de academia" />
        <img className="item" src={img6} alt="imagem de academia" />
        <img className="item" src={img7} alt="imagem de academia" />
      </div>
    </Conteiner>
  );
}
