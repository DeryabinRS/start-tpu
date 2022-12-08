export default function TabContent({id, classes = [], children}) {
	return(
		<div className={classes.join(' ')} id={id} role="tabpanel" aria-labelledby={id}>
			{children}
		</div>
	)
}