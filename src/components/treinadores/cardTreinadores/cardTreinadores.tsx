import { Conteiner } from "./style";
import stars from "../../../assets/5stars.png";

interface info {
	nome: string;
	info: string;
	imagem: string;
}

export default function CardTreinadores(props: info) {
	return (
		<Conteiner>
			<img src={props.imagem} alt="treinador academia" className="imagem3"/>
			<div className="content">
				<p className="title">{props.nome}</p>
				<p className="info">{props.info}</p>
				<img className="img2" src={stars} alt="estrelas" />
			</div>
		</Conteiner>
	);
}
