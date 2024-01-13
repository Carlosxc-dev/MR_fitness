import {Conteiner} from './style'
import Img from '../../assets/logowhite.jpeg'

export default function Footer() {
    const link = "https://carlosxc-dev.github.io/Portifolio/";
    return(
        <Conteiner>
           
            <img src={Img} alt="imagem de logo" />

            <div className='adress'>
                <p>
                    Rua Dr. Silvestre Ferraz N-546 Pinheirinho Itajubá-MG 
                </p>
            </div>
            
            <p>Feito por
                <a href={link} target='_blank'> Carlos Henrique</a>
            </p>
           

        </Conteiner>
    )
}
