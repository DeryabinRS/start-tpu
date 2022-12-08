import Footer from '../components/Footer/Footer'
export default function MainLayout({children}) {
	return (
		<>	
			<header></header>
			<main>
				{children}
			</main>
			<Footer/>
		</>
	)
}