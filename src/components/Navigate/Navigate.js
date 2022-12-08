import { Link } from 'react-router-dom'
import SocialPanel from '../SocialPanel/SocialPanel'
import logoHeader from '../../img/logotpu2.png'

export default function Navigate({linksArr = [], stylesArr = [], themeNav = "navbar-light"}){

	const renderLinks = linksArr.map((link, index) => {
	    if(link.href.indexOf('#') >= 0 || link.href.includes('https')){
			return(
				<li key={`nav_${index}`} className="nav-item mx-lg-3">
					<a className="nav-link mt-1 active" target={link.href.includes('https') ? '_blank' : undefined} href={link.href}>{link.name}</a>
				</li>
			)
		}else{
			return(
				<li key={`nav_${index}`} className="nav-item mx-lg-3">
					<Link className="nav-link mt-1 active" to={link.href}>{link.name}</Link>
				</li>
			)
		}
	
	});

	return (
		<nav className={`navbar navbar-expand-lg ${stylesArr.join(' ')} ${themeNav}`} >
			<div className="container">
				<Link className="navbar-brand" to="/"><img src={logoHeader} alt="TPU"/></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-lg-0 w-100 justify-content-around">
						{renderLinks}
					</ul>
					<SocialPanel clsBlock={['d-flex', 'mt-1']} clsLink={['nav-link', 'active', 'soc_panel']}/>
				</div>
			</div>
		</nav>
	)
}