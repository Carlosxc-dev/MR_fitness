import { Conteiner } from './style'

const telefone = 5535998163938
const mensagem = 'Ola%20carlos%20Tudo%20bem?'


interface link{
    msg: string;
}

export default function button(props:link) {
    const link = `https://api.whatsapp.com/send?phone=${telefone}&text=${props.msg}`
    return (
        <Conteiner>
            <a href={link} target='_blank'>Comece agora</a>
        </Conteiner>
    )
}
