import { Conteiner } from "./style";
import Card from "./card/card";
import img from "../../assets/services.jpg";
import img_mobile from "../../assets/services_mobile.jpg";


export default function Servicos() {
  return (
    <Conteiner id='servicos'>
      <picture>
        <source media="(max-width: 425px)" srcSet={img_mobile} />
        <img src={img} alt="image de treino" />
      </picture>

      <p className="title">
        Nossos
        <span> serviços</span>
      </p>

      <p className="subtitle">
        Oferecemos varias opcoes para sua atender sua escolha
      </p>

      <div className="content">
        <div className="item">
          <Card
            number="01"
            title="Aula de Karatê (infantil)"
            text="Segunda e quarta 18 - Prof. Robinho"
          />
        </div>
        <div className="item">
          <Card
            number="02"
            title="Musculação para terceira idade"
            text="(estúdio mr fitness)
            Segunda a sexta
            08h as 12h professor Mateus
            14h as 19h professor Jonas" 

          />
        </div>
        <div className="item">
          <Card
            number="03"
            title="Musculação terceiro e quarto andar"
            text="Segunda a sexta das 6h às 12h professor Vinicius 
                  Das 12:30 às 18h professor Camilo
                  Das 18h às 22:30h professor Daniel
                  
                  Sábados 
                  Das 8h às 14h professor Jonatas
                  Domingos 
                  Das 9h às 12h
                  Feriados 
                  Das 8h as 12h"
          />
        </div>
        <div className="item">
          <Card
            number="04"
            title="Ballet clássico"
            text="Baby class quarta-feira 18:30
            Ballet infantil terça e quinta 19:30
            Ballet adulto terça e quinta 20:30
            Prof. Carol"
          />
        </div>
        <div className="item">
          <Card
            number="05"
            title="Sanda - boxe chinês "
            text="Turma mista segunda a sexta 17h, 18h, 19h e 20h
            Sábados 
            9h e 10h
            
            Turma feminina
            Terça e quinta às 19h
            Prof. Erik"
          />
        </div>
        <div className="item">
          <Card
            number="06"
            title="Funcional"
            text=" 
            Segunda a sexta 
            6h, 7h, 18h e 19h
            Prof. Gustavo"
          />
        </div>
        <div className="item">
          <Card
            number="07"
            title="Localizada "
            text="Segunda, quarta e sexta
            8h 
            Prof. Jonas"
          />
        </div>
      </div>
    </Conteiner>
  );
}
