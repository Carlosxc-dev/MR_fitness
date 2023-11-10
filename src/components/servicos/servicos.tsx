import { Conteiner } from "./style";
import Card from "./card/card";
import img from "../../assets/services.jpg";

export default function Servicos() {
  return (
    <Conteiner id='servicos'>
      <img src={img} alt="" />

      <p className="title">
        Nossos
        <span> serviços</span>
      </p>

      <div className="content">
        <div className="item">
          <Card
            number="01"
            title="Musculação"
            text="Oferecemos sessões de treinamento personalizadas com personal trainers certificados que criam 
						planos de treino personalizados com base em objetivos individuais"
          />
        </div>
        <div className="item">
          <Card
            number="02"
            title="Crossfit"
            text="Oferecemos sessões de treinamento personalizadas com personal trainers certificados que criam 
						planos de treino personalizados com base em objetivos individuais"
          />
        </div>
        <div className="item">
          <Card
            number="03"
            title="Artes Maciais"
            text="Oferecemos sessões de treinamento personalizadas com personal trainers certificados que criam 
						planos de treino personalizados com base em objetivos individuais"
          />
        </div>
        <div className="item">
          <Card
            number="04"
            title="Studio musculação"
            text="Oferecemos sessões de treinamento personalizadas com personal trainers certificados que criam 
					planos de treino personalizados com base em objetivos individuais"
          />
        </div>
      </div>
    </Conteiner>
  );
}
