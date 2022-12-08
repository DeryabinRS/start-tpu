import { NavLink } from 'react-router-dom';

export default function Event({name, icon, bg, id = 1}) {

	return (
		<NavLink to={`/guide/${id}`}>
			<div className="guide">
				<div className="back" style={{backgroundImage: `url("${bg}"`}}></div>
				<div className="img"><img src={`${icon}`} alt="guide tpu"/></div>
				<div className="title mt-4">{name}</div>
			</div>
		</NavLink>
	)
}