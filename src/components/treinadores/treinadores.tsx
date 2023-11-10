import { Conteiner } from "./style";
import Card from "./cardTreinadores/cardTreinadores";
import img from "../../assets/treinadores/Image.png";
import treiners from '../../assets/treiners.png'

export default function Treinadores() {
	return (
		<Conteiner id='treinadores'>
			<img src={treiners} alt="foto de academia" className="imagem"/>

			<p className="title">
				Treinadores
				<span> Profissionais</span>
			</p>
			<p className="subtitle">
				Se você deseja aprimorar sua rotina de exercícios atual
			</p>

			<div className="content">
				<div className="item">
					<Card nome="Camilo" info="Personal treiner" imagem={img} />
				</div>
				<div className="item">
					<Card nome="Daniel" info="Personal treiner" imagem={img} />
				</div>
				<div className="item">
					<Card nome="Marcus" info="Personal treiner" imagem={img} />
				</div>
			</div>
		</Conteiner>
	);
}
