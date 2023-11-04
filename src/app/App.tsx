import Global_styles from "../styles/global_styles"
import {ThemeProvider} from 'styled-components'
import Dark from '../styles/theme/dark'

import Navbar from "../components/navbar/navbar"
import Hero from "../components/hero/hero"
import About from "../components/about/about"
import Servicos from "../components/servicos/servicos"
import Galeria from "../components/galeria/galeria"
import Treinadores from "../components/treinadores/treinadores"
import Planos from "../components/planos/planos"
import Contato from "../components/contato/contato"
import Footer from "../components/footer/footer"

export default function App() {
	return (
		<ThemeProvider theme={Dark}>
			<Global_styles/>
			<Navbar />
			<Hero />
			<About />
			<Servicos />
			<Galeria />
			<Treinadores />
			<Planos />
			<Contato />
			<Footer />
		</ThemeProvider>
	)
}