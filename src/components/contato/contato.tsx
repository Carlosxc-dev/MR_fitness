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

					<p className="subtitle">get 50% off the first three classes you sign up for this month any <br />
						 GYM membership
					</p>

					<div className='btn1'>
						<Button
							msg='olacarlos'
						/>
					</div>
				</div>

			</div>

		</Conteiner>
	)
}
