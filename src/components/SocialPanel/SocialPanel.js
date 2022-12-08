import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegramPlane, faInstagram, faVk, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function SocialPanel({clsBlock = [], clsLink = [], size = 'lg'}) {
	const classesLinkToStr = clsLink.join(' ');
	return(
		<div className={clsBlock.join(' ')}>
			<a href="https://vk.com/tpunews" target="_blank" rel="noopener noreferrer" className={classesLinkToStr}><FontAwesomeIcon size={size} icon={faVk} /></a>
			<a href="https://ttttt.me/newstpu" target="_blank" rel="noopener noreferrer" className={classesLinkToStr}><FontAwesomeIcon size={size} icon={faTelegramPlane} /></a>
			{/* <a href="https://www.instagram.com/tpu.ru" target="_blank" rel="noopener noreferrer" className={classesLinkToStr}><FontAwesomeIcon size={size} icon={faInstagram} /></a> */}
			{/* <a href="https://www.tiktok.com/@tpu.house" target="_blank" rel="noopener noreferrer" className={classesLinkToStr}><FontAwesomeIcon size={size} icon={faTiktok} /></a> */}
			{/* <a href="https://www.youtube.com/user/TPUmedia" target="_blank" rel="noopener noreferrer" className={classesLinkToStr}><FontAwesomeIcon size={size} icon={faYoutube} /></a> */}
		</div>
	)
}