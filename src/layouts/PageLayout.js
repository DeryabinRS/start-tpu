

import Navigate from '../components/Navigate/Navigate'
import Footer from '../components/Footer/Footer'

export default function PageLayout({children}) {

	return (
		<>
			<header>
			<Navigate stylesArr={[]} linksArr={
				[
					{name:'Главная', href:'/'},
					{name:'Справочник', href:'/guide'},
					{name:'Мерч ТПУ', href:'https://shop.tpu.ru/'},
				]
			}/>
			</header>
			<main>
				{children}
			</main>
			<Footer/>
		</>
	)
}