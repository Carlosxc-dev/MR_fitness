import { Conteiner } from "./style";
import img1 from '../../assets/galeria/academia01.jpeg'
import img2 from '../../assets/galeria/academia02.jpeg'
import img3 from '../../assets/galeria/academia03.jpeg'
import img4 from '../../assets/galeria/academia04.jpeg'
import img5 from '../../assets/galeria/academia05.jpeg'
import img6 from '../../assets/galeria/academia07.jpeg'
import img7 from '../../assets/galeria/academia08.jpeg'
import img8 from '../../assets/galeria/academia09.jpeg'
import img9 from '../../assets/galeria/academia10.jpeg'
import img10 from '../../assets/galeria/academia11.jpeg'
import img11 from '../../assets/galeria/academia06.jpeg'
import video from '../../assets/videoo.mp4'

export default function Galeria() {
  return (
    <Conteiner id='galeria'>
      <p className="title">
        Nossa
        <span> galeria</span>
      </p>
      <p className="subtitle">Explore Nossa Galeria de Imagens</p>

      <div className="imgConteiner">
        <video className="item" width="750" height="500" controls >
          <source src={video} type="video/mp4"/>
        </video>
        <img className="item" src={img1} alt="imagem de academia" />
        <img className="item" src={img2} alt="imagem de academia" />
        <img className="item" src={img3} alt="imagem de academia" />
        <img className="item" src={img4} alt="imagem de academia" />
        <img className="item" src={img5} alt="imagem de academia" />
        <img className="item" src={img6} alt="imagem de academia" />
        <img className="item" src={img7} alt="imagem de academia" />
        <img className="item" src={img8} alt="imagem de academia" />
        <img className="item" src={img9} alt="imagem de academia" />
        <img className="item" src={img10} alt="imagem de academia" />
        <img className="item" src={img11} alt="imagem de academia" />
      </div>
    </Conteiner>
  );
}
