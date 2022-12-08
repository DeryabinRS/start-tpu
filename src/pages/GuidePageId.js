import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useParams } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import {useEffect, useState} from "react";
import Loader from "../components/Loader/Loader";

export default function GuidePageId(){

	const {id} = useParams()
	const [guide, setGuide] = useState([])

	useEffect(() => {
		// other code
		let mounted = true
		const fetchData = async (id) => {
			try {
				const response = await fetch('/guide.json');
				const result = await response.json();
				const guideId = await result.filter(item => item.id === id)
				//console.log(guideId, 'result')
				// непосредственное обновление состояния при условии, что компонент не размонтирован
				if (mounted) {
					setGuide(guideId[0]);
				}
			} catch (e) {
				console.error(e.message)
			}
		};
		fetchData(+id);
		return function cleanup() {
			mounted = false
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	if(guide.length === 0) {
		return (
			<PageLayout>
				<Loader fullPage={false}/>
			</PageLayout>
		)
	}else {
		return (
			<PageLayout>
				<div className="container my-2">
					<NavLink to='/guide' className="btn btn-success mt-3"><FontAwesomeIcon
						icon={faCaretLeft}/> Справочник</NavLink>
					<h1 className="my-4 title-page-guide">{guide.name}</h1>
				</div>
				<div className="container" dangerouslySetInnerHTML={{__html: guide.content}}></div>
			</PageLayout>
		)
	}
}