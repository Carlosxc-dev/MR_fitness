import { Conteiner } from './style'
import CardPlanos from './cardPlanos/cardPlanos'

export default function Planos() {
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
                    title='Mensal'
                    valor='R$ 80'
                    btnName='Aderir'
                    txt='Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Estou%20interessado(a)%20em%20aderir%20ao%20plano%20MENSAL.%20Gostaria%20de%20obter%20mais%20informações%20sobre%20esse%20plano,%20como%20valores,%20benefícios%20inclusos,%20horários%20disponíveis%20e%20qualquer%20detalhe%20adicional%20relevante.%0A%0AAtenciosamente'
                    
                />
                <CardPlanos 
                    title='semestral'
                    valor='R$ 200'
                    btnName='Aderir'
                    txt='Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Estou%20interessado(a)%20em%20aderir%20ao%20plano%20SEMESTRAL.%20Gostaria%20de%20obter%20mais%20informações%20sobre%20esse%20plano,%20como%20valores,%20benefícios%20inclusos,%20horários%20disponíveis%20e%20qualquer%20detalhe%20adicional%20relevante.%0A%0AAtenciosamente'
                />
                <CardPlanos 
                    title='Anual'
                    valor='R$ 500'
                    btnName='Aderir'
                    txt='Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Estou%20interessado(a)%20em%20aderir%20ao%20plano%20ANUAL.%20Gostaria%20de%20obter%20mais%20informações%20sobre%20esse%20plano,%20como%20valores,%20benefícios%20inclusos,%20horários%20disponíveis%20e%20qualquer%20detalhe%20adicional%20relevante.%0A%0AAtenciosamente'
                />
            </div>
        </Conteiner>
    )
}
