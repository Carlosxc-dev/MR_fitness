import { Conteiner } from './style'
import { BsCheck2Circle } from 'react-icons/bs'

interface info {

  itens: {
    id: number,
    number: string,
    title: string,
    text: string,
    text01: string,
    text02: string,
    text03: string,
    text04: string,
    text05: string,
    text06: string,
  }
}


export default function card(props: info) {
  return (
    <Conteiner>
      <span className='number'>{props.itens.number}</span>
      <span className='title'>{props.itens.title}</span>

      {
        (props.itens.text == "") ? "" : <span><BsCheck2Circle /> {props.itens.text}</span>
      }

      {
        (props.itens.text01 == "") ? "" : <span><BsCheck2Circle /> {props.itens.text01}</span>
      }

      {
        (props.itens.text02 == "") ? "" : <span><BsCheck2Circle /> {props.itens.text02}</span>
      }

      {
        (props.itens.text03 == "") ? "" : <span><BsCheck2Circle /> {props.itens.text03}</span>
      }

      {
        (props.itens.text04 == "") ? "" : <span><BsCheck2Circle /> {props.itens.text04}</span>
      }

      {
        (props.itens.text05 == "") ? "" : <span><BsCheck2Circle /> {props.itens.text05}</span>
      }

      {
        (props.itens.text06 == "") ? "" : <span><BsCheck2Circle /> {props.itens.text06}</span>
      }


    </Conteiner>
  )
}
