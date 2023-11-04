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
                    to='home'
                    className='item'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={1000}
                    
                >Home</Link>
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
                >Plano</Link>
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
                msg='olacarlos'
            />

        </Conteiner>
    )
}
