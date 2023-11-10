import {Conteiner} from './style'
import img from '../../assets/about.jpg'

export default function about() {
  return (
    <Conteiner id='about'>
      <p className='title'>
        Bem-vindos à <br />
		<span>mrfitness !</span>
      </p>
	
		<div className='info'>
			
			Localizada em Itajubá MG, nossa academia é um espaço exclusivo de xxx metros quadrados 
			totalmente dedicado à musculação. Estamos abertos desde xxxx e nos orgulhamos de oferecer uma 
			infraestrutura de primeira classe voltada para todos os públicos, desde iniciantes até avançados,
			incluindo pessoas de todas as idades, desde jovens até a melhor idade. <br /><br />

			Na MRfitness, a musculação é o foco principal. Nossa equipe altamente qualificada está pronta para ajudá-lo
			a atingir seus objetivos de fitness, seja ganhar massa muscular, aumentar a força ou melhorar a saúde em 
			geral. Oferecemos planos flexíveis, incluindo opções mensais, quadrimestrais e anual, para atender às suas
			necessidades e preferências individuais.
			
		</div>

	  <div className='img'>
		<div className='retWhite'></div>
		<div className='retYellow'></div>
		<img src={img} alt="" />
	  </div>
    </Conteiner>
  )
}
