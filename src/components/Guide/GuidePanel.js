import Guide from './Guide'

// import Bg1 from '../../img/guide/1.jpg'
// import Bg2 from '../../img/guide/2.jpg'
// import Bg3 from '../../img/guide/3.jpg'
// import Bg4 from '../../img/guide/4.jpg'
// import Bg5 from '../../img/guide/5.jpg'
// import Bg6 from '../../img/guide/6.jpg'
// import Bg7 from '../../img/guide/7.jpg'
// import Bg8 from '../../img/guide/8.jpg'
// import Bg9 from '../../img/guide/9.jpg'
// import Bg10 from '../../img/guide/10.jpg'

import Bg1 from '../../img/guide/2022/1.png'
import Bg2 from '../../img/guide/2022/2.png'
import Bg3 from '../../img/guide/2022/3.png'
import Bg4 from '../../img/guide/2022/4.png'
import Bg5 from '../../img/guide/2022/5.png'
import Bg6 from '../../img/guide/2022/6.png'
import Bg7 from '../../img/guide/2022/7.png'
import Bg8 from '../../img/guide/2022/8.png'
import Bg9 from '../../img/guide/2022/9.png'
import Bg10 from '../../img/guide/2022/10.png'
import Bg11 from '../../img/guide/2022/11.png'
import Bg12 from '../../img/guide/2022/12.png'
import Bg13 from '../../img/guide/2022/13.png'

// import Ic1 from '../../img/guide/ic/i1.png'
// import Ic2 from '../../img/guide/ic/i2.png'
// import Ic3 from '../../img/guide/ic/i3.png'
// import Ic4 from '../../img/guide/ic/i4.png'
// import Ic5 from '../../img/guide/ic/i5.png'
// import Ic6 from '../../img/guide/ic/i6.png'
// import Ic7 from '../../img/guide/ic/i7.png'
// import Ic8 from '../../img/guide/ic/i8.png'
// import Ic9 from '../../img/guide/ic/i9.png'
// import Ic10 from '../../img/guide/ic/i10.png'

import Ic1 from '../../img/guide/2022/ic/i1.svg'
import Ic2 from '../../img/guide/2022/ic/i2.svg'
import Ic3 from '../../img/guide/2022/ic/i3.svg'
import Ic4 from '../../img/guide/2022/ic/i4.svg'
import Ic5 from '../../img/guide/2022/ic/i5.svg'
import Ic6 from '../../img/guide/2022/ic/i6.svg'
import Ic7 from '../../img/guide/2022/ic/i7.svg'
import Ic8 from '../../img/guide/2022/ic/i8.svg'
import Ic9 from '../../img/guide/2022/ic/i9.svg'
import Ic10 from '../../img/guide/2022/ic/i10.svg'
import Ic11 from '../../img/guide/2022/ic/i11.svg'
import Ic12 from '../../img/guide/2022/ic/i12.svg'
import Ic13 from '../../img/guide/2022/ic/i13.svg'

export default function GuidePanel(){
	return(
		<div className="guides">
			<Guide name="Твой университет" icon={Ic1} bg={Bg1} id={1}/>
			<Guide name="Твой глоссарий" icon={Ic5} bg={Bg5} id={5}/>
			<Guide name="Твой интернет" icon={Ic3} bg={Bg2} id={2}/>
			<Guide name="Твой личный кабинет" icon={Ic12} bg={Bg12} id={10}/>
			<Guide name="Твоя учеба" icon={Ic13} bg={Bg13} id={13}/>
			<Guide name="Твоя наука" icon={Ic10} bg={Bg10} id={15}/>
			{/* <Guide name="Твои соцсети" icon={Ic11} bg={Bg11} id={11}/> */}
			<Guide name="Твоя стипендия" icon={Ic4} bg={Bg4} id={4}/>
			<Guide name="Твоя «Скорая помощь»" icon={Ic7} bg={Bg6} id={6}/>
			<Guide name="Твой кампус" icon={Ic2} bg={Bg3} id={3}/>
			<Guide name="Твоя команда" icon={Ic9} bg={Bg7} id={14}/>
			<Guide name="Твой спорт" icon={Ic8} bg={Bg8} id={8}/>
			<Guide name="Твое здоровье" icon={Ic6} bg={Bg9} id={9}/>
		</div>
	)
}