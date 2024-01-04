import { Conteiner } from './style'

const telefone = 5535984183443


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
