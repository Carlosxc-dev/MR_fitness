import { Conteiner } from './style.ts'
import Img from '../../assets/logowhite.jpeg'

import { Link, animateScroll as scroll } from "react-scroll";

import Buttton from '../button/button.tsx'

const scrollToTop = () => {
    scroll.scrollToTop();
};

export default function Navbar() {
    return (
        <Conteiner>
            <span className='logo' onClick={scrollToTop}>
                <img src={Img} alt="imagem de logo" />
            </span>
            <div className='nav'>
                <Link
                    to='about'
                    className='item'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                >Sobre</Link>
                <Link
                    to='servicos'
                    className='item'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                >Serviços</Link>
                <Link
                    to='galeria'
                    className='item'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                >Galeria</Link>
                <Link
                    to='treinadores'
                    className='item'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                >Treinadores</Link>
                <Link
                    to='planos'
                    className='item'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={80}
                    duration={1000}
                >Planos</Link>
                <Link
                    to='contato'
                    className='item'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={1000}
                >Contato</Link>
            </div>

            <Buttton
                msg='Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Gostaria%20de%20obter%20informações%20sobre%20os%20planos%20e%20serviços%20oferecidos%20pela%20academia.%20Estou%20interessado(a)%20em%20começar%20meu%20treinamento%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20opções%20disponíveis,%20bem%20como%20qualquer%20promoção%20atual.%0A%0AAtenciosamente'
            />


        </Conteiner>
    )
}
