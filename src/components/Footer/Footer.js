import SocialPanel from '../SocialPanel/SocialPanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faMobile } from '@fortawesome/free-solid-svg-icons'
import logoFooter from '../../img/logotpu2.png'
import { linksArr } from '../../pages/MainPage'
import { Link } from 'react-router-dom'

export default function Footer() {
	return(
		<>
			<footer>
				<div className="container">
					<div className="row my-5">
						<div className="col-md-3 my-3">
							<div><img src={logoFooter} className="img-fluid" alt="logo TPU"/></div>
							<div className='slogan mt-4'>Миру нужны <br/><span>инженеры</span></div>
							<div data-aos="zoom-out" data-aos-duration="2000" className='mt-3'>Думай. Учись. Действуй</div>
						</div>
						<div className="col-md-5 my-1">
							<SocialPanel clsBlock={['d-flex', 'mt-1']} clsLink={['nav-link', 'active', 'soc_panel']}/>
							<div className='mt-3'>
								<ul>
									{linksArr.map((link, i) => (
										<li key={i}><a href={link.href}>{link.name}</a></li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-md-4 my-1">
							<p>
								пр.  Ленина, 30, <br/>
								Главный корпус ТПУ, офис 2000
							</p>
							<p>
								<a href="mailto:tpu@tpu.ru">tpu@tpu.ru</a>
							</p>
							<p>+7 (3822) 70-16-02, +7 (3822) 70-64-06</p>
						</div>
					</div>
				</div>	
				<div className="footer_bottom text-white">
					<div className='container'>
						© {new Date().getFullYear()} Национальный исследовательский Томский политехнический университет
					</div>
				</div>	
			</footer>
		</>
	)
}