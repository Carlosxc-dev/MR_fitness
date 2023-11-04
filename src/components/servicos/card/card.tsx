import {Conteiner} from './style'

interface info {
    title: string,
    number: string,
    text: string,
}


export default function card(props:info) {
  return (
    <Conteiner>
        <span>{props.number}</span>
        <span>{props.title}</span>
        <span>{props.text}</span>
    </Conteiner>
  )
}
