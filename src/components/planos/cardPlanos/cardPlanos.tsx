import { Conteiner } from "./style"
import { BsCheck2Circle } from 'react-icons/bs'

interface card {

    itens: {
        id: number;
        title: string;
        valor: string;
        txt00: string;
        txt01: string;
        txt02: string;
        txt03: string;
        txt04: string;
        txt05: string;
        btnName: string;
        msg: string
    }
    
}

const telefone = 5535998163938

export default function cardPlanos(props: card) {
    const link = `https://api.whatsapp.com/send?phone=${telefone}&text=${props.itens.msg}`
    return (
        <Conteiner>
            <div className="content">
                <div className="one">
                    {props.itens.title} <br />
                    <span>
                        {props.itens.valor}
                    </span>

                </div>
                
                <div className="infos">
                    {
                        (props.itens.txt00 == "") ? "" : <span><BsCheck2Circle /> {props.itens.txt00}</span>
                    }
                    <span> 
                        <BsCheck2Circle /> {props.itens.txt01}
                    </span> 
                    <span> 
                        <BsCheck2Circle /> {props.itens.txt02} 
                    </span> 
                    <span> 
                        <BsCheck2Circle /> {props.itens.txt03} 
                    </span> 
                    <span> 
                        <BsCheck2Circle /> {props.itens.txt04} 
                    </span>
                    
                    {
                        (props.itens.txt05 == "") ? "" : <span><BsCheck2Circle /> {props.itens.txt05}</span>
                    }
                    
                </div>

                <div className="btn">
                    <a href={link} target='_blank'>{props.itens.btnName}</a>
                </div>
            </div>


        </Conteiner>
    )
}
