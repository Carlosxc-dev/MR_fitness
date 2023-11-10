import { Conteiner } from './style'
import img from '../../assets/contact.png'
import Button from '../button/button'


export default function contato() {
	return (
		<Conteiner id='contato'>

			<div className='content'>
				<img src={img} alt="imagem homen" />

				<div className='contact'>
					<p className="title">
						Vamos começar o  <br />
						<span>treinamento</span>
					</p>

					<p className="subtitle">
						Transforme seus objetivos em realizações! Descubra os benefícios de nossos planos 
						exclusivos, projetados para levar sua jornada de fitness a novos patamares. Invista
						em você, conquiste resultados. Seu melhor eu começa aqui.
					</p>

					<div className='btn1'>
						<Button
							msg='Prezada%20equipe%20MRFITNESS,%0A%0AEspero%20que%20estejam%20bem.%20Gostaria%20de%20obter%20informações%20sobre%20os%20planos%20e%20serviços%20oferecidos%20pela%20academia.%20Estou%20interessado(a)%20em%20começar%20meu%20treinamento%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20opções%20disponíveis,%20bem%20como%20qualquer%20promoção%20atual.%0A%0AAtenciosamente'
						/>
					</div>
				</div>

			</div>

		</Conteiner>
	)
}
