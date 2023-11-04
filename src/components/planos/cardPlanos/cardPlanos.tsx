import { Conteiner } from "./style"
import { BsCheck2Circle } from 'react-icons/bs'

interface card {
    title: string;
    valor: string;
    btnName: string
    txt:string;
}
const telefone = 5535998163938

export default function cardPlanos(props: card) {
    const link = `https://api.whatsapp.com/send?phone=${telefone}&text=${props.txt}`
    return (
        <Conteiner>
            <div className="content">
                <div className="one">
                    {props.title} <br />
                    <span>
                        {props.valor}
                    </span>

                </div>
                
                <div className="infos">
                    <span> <BsCheck2Circle /> Visit without restrictions 24/7</span> <br />
                    <span> <BsCheck2Circle /> Individual training program</span> <br />
                    <span> <BsCheck2Circle /> Access to the VTRAINER application</span> <br />
                    <span> <BsCheck2Circle /> Trainer support</span>
                </div>

                <div className="btn">
                    <a href={link} target='_blank'>{props.btnName}</a>
                </div>
            </div>


        </Conteiner>
    )
}
