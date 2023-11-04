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
                        msg='olacarlos'
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
