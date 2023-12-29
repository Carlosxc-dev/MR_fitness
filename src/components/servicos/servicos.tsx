import { Conteiner } from "./style";
import Card from "./card/card";
import img from "../../assets/services.jpg";
import img_mobile from "../../assets/services_mobile.jpg";


export default function Servicos() {

  const infos = [
    {
      id: 1,
      number: "01",
      title: "Aula de Karatê (infantil)",
      text: " Segunda e quarta as 18 hrs - Prof. Robinho",
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
      text: " Segunda a sexta 08h as 12h professor Mateus",
      text01: " 14h as 19h professor Jonas",
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
      text: " Segunda a sexta:",
      text01: " Das 6h às 12h professor Vinicius",
      text02: " Das 12:30 às 18h professor Camilo",
      text03: " Das 18h às 22:30h professor Daniel",
      text04: " Sábados: Das 8h às 14h professor Jonatas",
      text05: " Domingos Das 9h às 12h",
      text06: " Feriados Das 8h as 12h",
    },
    {
      id: 4,
      number: "04",
      title: "Ballet clássico",
      text:   " Baby class quarta-feira 18:30 Prof. Carol",
      text01: " Ballet infantil terça e quinta 19:30 Prof. Carol",
      text02: " Ballet adulto terça e quinta 20:30 Prof. Carol",
      text03: "",
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
      text02: " Turma feminina Terça e quinta às 19h Prof. Erik",
      text03: "",
      text04: "",
      text05: "",
      text06: "",
    },
    {
      id: 6,
      number: "06",
      title: "Funcional",
      text: "Segunda a sexta 6h, 7h, 18h e 19h Prof. Gustavo",
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
      text: " Segunda, quarta e sexta 8h Prof. Jonas",
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
        Oferecemos varias opcoes para sua atender sua escolha
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
            itens={infos[2]}
          />
        </div>
        <div className="item">
          <Card
            itens={infos[3]}
          />
        </div>
        <div className="item">
          <Card
            itens={infos[4]}
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

      </div>
    </Conteiner>
  );
}
