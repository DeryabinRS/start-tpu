export default function TabNav({id, active, dataBsTarget, children}) {
	return (
		<li className="nav-item" role="presentation">
			<button className={`nav-link ${active && 'active'}`} id={id} data-bs-toggle="tab" data-bs-target={`#${dataBsTarget}`} type="button" role="tab" aria-controls="home" aria-selected="true">{children}</button>
		</li>
	)
}