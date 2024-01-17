import { Conteiner } from "./style";
import Card from "./card/card";
import img from "../../assets/services_desktop_ofc.jpg";
import img_mobile from "../../assets/services_mobile_ofc.jpg";


export default function Servicos() {

  const infos = [
    {
      id: 1,
      number: "01",
      title: "Aula de Karatê (infantil)",
      text: " Segunda e quarta às 18h - Prof. Robinho",
      text01: "",
      text02: "",
      text03: "",
      text04: "",
      text05: "",
      text06: "",
    },
    {
      id: 2,
      number: "02",
      title: " Musculação Personalizada (estúdio)",
      text: " Segunda a sexta das 08h às 12h - Prof Mateus",
      text01: " Segunda a sexta das 14h as 19h - Prof Jonas",
      text02: "",
      text03: "",
      text04: "",
      text05: "",
      text06: "",
    },
    {
      id: 3,
      number: "03",
      title: "Musculação terceiro e quarto andar",
      text: " Segunda a sexta das 6h às 22:30h",
      text01: " Sábados das 8h às 14h ",
      text02: " Domingos das 9h às 12h ",
      text03: " Feriados das 8h às 12h ",
      text04: " Prof: Vinicius, Jonatas e Daniel",
      text05: "",
      text06: "",
    },
    {
      id: 4,
      number: "04",
      title: " Ballet clássico",
      text:   " Baby class quarta-feira às 18:30",
      text01: " Ballet infantil terça e quinta às 19:30",
      text02: " Ballet adulto terça e quinta às 20:30",
      text03: " Prof: Carol",
      text04: "",
      text05: "",
      text06: "",
    },
    {
      id: 5,
      number: "05",
      title: "Sanda - boxe chinês",
      text: " Turma mista segunda a sexta 17h, 18h, 19h e 20h",
      text01: " Sábados 9h e 10h",
      text02: " Turma feminina Terça e quinta às 19h - Prof. Erik",
      text03: "",
      text04: "",
      text05: "",
      text06: "",
    },
    {
      id: 6,
      number: "06",
      title: "Funcional",
      text: "Segunda a sexta 6h, 7h, 18h e 19h - Prof. Gustavo",
      text01: "",
      text02: "",
      text03: "",
      text04: "",
      text05: "",
      text06: "",
    },
    {
      id: 7,
      number: "07",
      title: "Localizada",
      text: " Segunda, quarta e sexta 8h - Prof. Jonas",
      text01: "",
      text02: "",
      text03: "",
      text04: "",
      text05: "",
      text06: "",
    },
  ]

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
        Oferecemos varias opcoes para atender sua escolha
      </p>

      <div className="content">
        <div className="item">
          <Card
            itens={infos[0]}
          />
        </div>
        <div className="item">
          <Card
            itens={infos[1]}
          />
        </div>
        <div className="item">
          <Card
            itens={infos[5]}
          />
        </div>
        <div className="item">
          <Card
            itens={infos[6]}
          />
        </div>
        
        <div className="item">
          <Card
            itens={infos[4]}
          />
        </div>
        
        
        <div className="item">
          <Card
            itens={infos[3]}
          />
        </div>
        <div className="item">
          <Card
            itens={infos[2]}
          />
        </div>

      </div>
    </Conteiner>
  );
}
