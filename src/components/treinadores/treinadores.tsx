import { Conteiner } from "./style";
import Card from "./cardTreinadores/cardTreinadores";
import treinador01 from "../../assets/treinador_01.jpeg";
import treinador02 from "../../assets/treinador_02_mod.jpeg";
import treinador03 from "../../assets/treinador_03.jpeg";
import treinador04 from "../../assets/treinador_04.jpeg";
import img_mobile from "../../assets/treinadores/treiners_mobile.png";
import img_tablet from "../../assets/treiners_tablet.png";
import treiners from '../../assets/treiners.png'

export default function Treinadores() {
	return (
		<Conteiner id='treinadores'>
			<picture>
				<source media="(max-width: 425px)" srcSet={img_mobile} />
				<source media="(max-width: 768px)" srcSet={img_tablet} />
				<img src={treiners} alt="foto de academia" className="imagem" />
			</picture>

			<p className="title">
				Treinadores
				<span> Profissionais</span>
			</p>
			<p className="subtitle">
				Se você deseja aprimorar sua rotina de exercícios atual
			</p>

			<div className="content">
				<div className="item">
					<Card nome="Jonatas" info="Personal treiner" imagem={treinador01} />
				</div>
				<div className="item">
					<Card nome="Matheus" info="Personal treiner" imagem={treinador02} />
				</div>
				<div className="item">
					<Card nome="Daniel" info="Personal treiner" imagem={treinador03} />
				</div>
				<div className="item">
					<Card nome="Jonas" info="Personal treiner" imagem={treinador04} />
				</div>
				{/* <div className="item">
					<Card nome="Vinicius" info="Personal treiner" imagem={treinador03} />
				</div> */}
				
			</div>
		</Conteiner>
	);
}
