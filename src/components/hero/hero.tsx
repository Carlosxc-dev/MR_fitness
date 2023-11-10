import {Conteiner, Content, Infos} from './style'
import img from '../../assets/hero.jpg';
import Button from '../button/button'

export default function Hero() {
    return(
        <Conteiner id='home'>
            <img src={img} alt="imagem de academia"/>
            <Content >
                <p className='title'>
                    PRONTO PARA <br />
                    TREINAR <br />
                    <span className='title pri'>SEU CORPO</span>
                </p>

                <p className='subTitle'>
                    O treinamento na academia é uma abordagem estruturada e disciplinada ao exercício físico 
                    que se concentra na força, resistência e melhoria geral do condicionamento físico.
                </p>

                <div className='btn'>
                    <Button
                        msg='Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Gostaria%20de%20obter%20informações%20sobre%20os%20planos%20e%20serviços%20oferecidos%20pela%20academia.%20Estou%20interessado(a)%20em%20começar%20meu%20treinamento%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20opções%20disponíveis,%20bem%20como%20qualquer%20promoção%20atual.%0A%0AAtenciosamente'
                    />
                </div>

                <Infos>
                    <div className='bloco'>
                        <div>10+</div>
                        <div>Anos de experiencia</div>
                    </div>
                    <div className='bloco'>
                        <div>15k+</div>
                        <div>Membros aderiram</div>
                    </div>
                    <div className='bloco'>
                        <div>10k+</div>
                        <div>Alunos felizes</div>
                    </div>
                </Infos>
            </Content>
        </Conteiner>
    )
}
