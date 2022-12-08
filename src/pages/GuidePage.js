import PageLayout from '../layouts/PageLayout';
import GuidePanel from './../components/Guide/GuidePanel';

export default function GuidePage(){

	return(
		<PageLayout>	
			<div className="guide_block">
				<h2 className="text-center pt-3 pb-2">Справочник первокурсника</h2>
				<GuidePanel/>
			</div>
		</PageLayout>
	)
}