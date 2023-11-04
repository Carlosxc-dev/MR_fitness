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
                    txt='olacarlos'
                />
                <CardPlanos 
                    title='semestral'
                    valor='R$ 200'
                    btnName='Aderir'
                    txt='olacarlos'
                />
                <CardPlanos 
                    title='Anual'
                    valor='R$ 500'
                    btnName='Aderir'
                    txt='olacarlos'
                />
            </div>
        </Conteiner>
    )
}
