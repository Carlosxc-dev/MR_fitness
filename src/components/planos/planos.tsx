import { Conteiner } from './style'
import CardPlanos from './cardPlanos/cardPlanos'

export default function Planos() {

    const infos = [
        {
            id: 1,
            title: "Mensal livre",
            valor: "R$ 80,00",
            txt00: "Musculação 3° e 4° andar",
            txt01: "Pagando no pix ou dinheiro sai a 75,00",
            txt02: "Segunda à sexta-feira das 6h as 22:30h",
            txt03: "Sábados das 8h as 14h",
            txt04: "Domingos das 9h as 12h",
            txt05: "Feriados das 8h as 12h",
            btnName: "Aderir",
            msg: "Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Estou%20interessado(a)%20em%20aderir%20ao%20plano%20MENSAL%LIVRE.%20Gostaria%20de%20obter%20mais%20informações%20sobre%20esse%20plano,%20como%20valores,%20benefícios%20inclusos,%20horários%20disponíveis%20e%20qualquer%20detalhe%20adicional%20relevante.%0A%0AAtenciosamente"
        },
        {
            id: 2,
            title: "Mensal economico",
            valor: "R$ 60,00",
            txt00: "Musculação 3° e 4° andar",
            txt01: "Pagando no pix ou dinheiro sai 55,00",
            txt02: "Segunda à sexta-feira das 6h as 22:30h",
            txt03: "Sábados das 8h as 14h",
            txt04: "Domingos das 9h as 12h",
            txt05: "Feriados das 8h as 12h",
            btnName: "Aderir",
            msg: "Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Estou%20interessado(a)%20em%20aderir%20ao%20plano%20MENSAL%ECONOMICO.%20Gostaria%20de%20obter%20mais%20informações%20sobre%20esse%20plano,%20como%20valores,%20benefícios%20inclusos,%20horários%20disponíveis%20e%20qualquer%20detalhe%20adicional%20relevante.%0A%0AAtenciosamente"
        },
        {
            id: 3,
            title: "Anual",
            valor: "12 x 49,00",
            txt00: "12x parcelas fixas de 49,00 no cartão de crédito ",
            txt01: "Avaliação Física + ficha de  treino montado conforme seu objetivo e resultado",
            txt02: "Todo mês vc tem direito de trazer 1 amigo para treinar com vc durante 1 semana",
            txt03: "Caso haja necessidade de trancar por alguns meses fique tranquila que ao retorar os meses ausente serão recuperados",
            txt04: "É um plano transferível caso queira passar para alguém",
            txt05: "Horarios do plano mensal",
            btnName: "Aderir",
            msg: "Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Estou%20interessado(a)%20em%20aderir%20ao%20plano%20ANUAL.%20Gostaria%20de%20obter%20mais%20informações%20sobre%20esse%20plano,%20como%20valores,%20benefícios%20inclusos,%20horários%20disponíveis%20e%20qualquer%20detalhe%20adicional%20relevante.%0A%0AAtenciosamente"
        },
        {
            id: 4,
            title: "Personal no estúdio: 1° andar",
            valor: "",
            txt00: "Trazendo o seu personal: ",
            txt01: "2x na semana - R$70,00",
            txt02: "3x na semana - R$80,00",
            txt03: "4x na semana - R$90,00",
            txt04: "5x na semana - R$100,00",
            txt05: "Fechando o plano no estúdio , o aluno obtém acesso em todos os andares de musculação da academia.",
            btnName: "Aderir",
            msg: "Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Estou%20interessado(a)%20em%20aderir%20ao%20plano%20PERSONAL%ESTUDIO.%20Gostaria%20de%20obter%20mais%20informações%20sobre%20esse%20plano,%20como%20valores,%20benefícios%20inclusos,%20horários%20disponíveis%20e%20qualquer%20detalhe%20adicional%20relevante.%0A%0AAtenciosamente"
        },
        {
            id: 5,
            title: "Musculação no estúdio: 1° andar",
            valor: "",
            txt00: "",
            txt01: "2x na semana - R$100,00",
            txt02: "3x na semana - R$120,00",
            txt03: "4x na semana - R$130,00",
            txt04: "5x na semana - R$150,00",
            txt05: "Fechando o plano no estúdio, o aluno obtém acesso em todos os andares de musculação da academia.",
            btnName: "Aderir",
            msg: "Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Estou%20interessado(a)%20em%20aderir%20ao%20plano%20MUSCULACAO%ESTUDIO.%20Gostaria%20de%20obter%20mais%20informações%20sobre%20esse%20plano,%20como%20valores,%20benefícios%20inclusos,%20horários%20disponíveis%20e%20qualquer%20detalhe%20adicional%20relevante.%0A%0AAtenciosamente"
        },
    ]
    return (
        <Conteiner id='planos'>
            <p className="title">
                Escolha um
                <span> Plano</span>
            </p>
            <p className="subtitle">
                Oferecemos uma variedade de planos de associação para atender
                às necessidades e preferências individuais dos nossos clientes.
            </p>

            <div className='content'>
                <CardPlanos 
                    itens={infos[3]}
                />
                <CardPlanos 
                    itens={infos[4]}
                />
                <CardPlanos 
                    itens={infos[0]}
                />
                <CardPlanos 
                    itens={infos[1]}
                />
                <CardPlanos 
                    itens={infos[2]}
                />
              
            </div>
        </Conteiner>
    )
}
