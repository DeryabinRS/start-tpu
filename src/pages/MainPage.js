import React, { useEffect, useRef, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MainLayout from '../layouts/MainLayout';
import Navigate from '../components/Navigate/Navigate'
import { TabNav, TabContent } from '../components/Tabs';
import Event from '../components/Event/Event';
// import ParticleAnimate from '../components/ParticleAnimate/ParticleAnimate';
import SocialPanel from '../components/SocialPanel/SocialPanel';
import GuidePanel from '../components/Guide/GuidePanel';
import Poster from '../img/IMG_9199.jpg'
import Sednev from '../img/sednev.png'
import Signature from '../img/signature.png'
// import TopVideo from '../video/cube.mp4'
import Paint from '../img/paint.png'
import Slogan1 from '../img/slogan1.png'
import Slogan2 from '../img/slogan2.png'
import Erath from '../img/erath.png'
import Man from '../img/man.png'
import Rector from '../img/rector.jpg'
import Warrior from '../img/kv-warrior.png'
import book1 from '../img/notebook1.png'
import book2 from '../img/notebook2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Video from '../video/output.mp4'


const calendarEvents = [
	{
		id: 1,
		data_title: '1 Сентября',
		events: [
			{time:'8.30', title: '', content: 'Встречи в инженерных школах с первокурсниками (по отдельному расписанию)'},
			{time:'9.00 – 12.00', title: '', content: 'Вайб у Главного корпуса: музыка, фотозона, сладкие сюрпризы'},
			{time:'12:00', title: '', content: '<b>Обзорная экскурсия по историческому залу Музея истории ТПУ. (Главный корпус, ауд. 315).</b><p>Экскурсия об истории создания и открытия ТТИ, первых отделениях, профессорах и выпускниках; о деятельности вуза в разные периоды времени.</p>'},
			{time:'12:00', title: '', content: '<b>«Тайны Главного» – экскурсия по Главному корпусу ТПУ. (Главный корпус). </b><p>Экскурсия по Главному корпусу ТПУ: история строительства корпуса, о первом названии корпуса, о первых аудиториях с заходом в Актовый зал, а также рассказ о «деталях» и символах Томского политеха.</p>'},
			{time:'15:00', title: '', content: '<b>Обзорная экскурсия по историческому залу Музея истории ТПУ. (Главный корпус, ауд. 315).</b><p>Экскурсия об истории создания и открытия ТТИ, первых отделениях, профессорах и выпускниках; о деятельности вуза в разные периоды времени.</p>'},
			{time:'15:00', title: '', content: '<b>«Тайны Главного» – экскурсия по Главному корпусу ТПУ. (Главный корпус). </b><p>Экскурсия по Главному корпусу ТПУ: история строительства корпуса, о первом названии корпуса, о первых аудиториях с заходом в Актовый зал, а также рассказ о «деталях» и символах Томского политеха.</p>'},
			{time:'15:00', title: '', content: '<b>Пешеходная экскурсия «Европейский квартал».</b><br/>(Главный корпус – Инженерный корпус – Физический корпус – Химический корпус –  Горный корпус). <p>Экскурсия об истории строительства исторического кампуса вуза, часть зданий которого стали памятниками архитектуры федерального и регионального значения.</p>'},
			{time:'18.00', title: '', content: 'Специальное собрание клуба живого общения «ТОК»: встреча и.о. ректора ТПУ Дмитрия Седнева с первокурсниками в Инженерном дворике (вход в ворота справа от Главного корпуса)'},
			{time:'19:00', title: '', content: '<b>Пешеходная экскурсия «Европейский квартал».</b><br/>(Главный корпус – Инженерный корпус – Физический корпус – Химический корпус –  Горный корпус). <p>Экскурсия об истории строительства исторического кампуса вуза, часть зданий которого стали памятниками архитектуры федерального и регионального значения.</p>'},
			{time:'19.00', title: '', content: 'Музыкальный квартирник в Инженерном дворике'},
		]
	},
	{
		id: 2,
		data_title: '2 Сентября',
		events: [
			{time:'12:00', title: '', content: '<b>Обзорная экскурсия по историческому залу Музея истории ТПУ. (Главный корпус, ауд. 315).</b><p>Экскурсия об истории создания и открытия ТТИ, первых отделениях, профессорах и выпускниках; о деятельности вуза в разные периоды времени.</p>'},
			{time:'12:00', title: '', content: '<b>«Тайны Главного» – экскурсия по Главному корпусу ТПУ. (Главный корпус). </b><p>Экскурсия по Главному корпусу ТПУ: история строительства корпуса, о первом названии корпуса, о первых аудиториях с заходом в Актовый зал, а также рассказ о «деталях» и символах Томского политеха.</p>'},
			{time:'15:00', title: '', content: '<b>Обзорная экскурсия по историческому залу Музея истории ТПУ. (Главный корпус, ауд. 315).</b><p>Экскурсия об истории создания и открытия ТТИ, первых отделениях, профессорах и выпускниках; о деятельности вуза в разные периоды времени.</p>'},
			{time:'15:00', title: '', content: '<b>«Тайны Главного» – экскурсия по Главному корпусу ТПУ. (Главный корпус). </b><p>Экскурсия по Главному корпусу ТПУ: история строительства корпуса, о первом названии корпуса, о первых аудиториях с заходом в Актовый зал, а также рассказ о «деталях» и символах Томского политеха.</p>'},
			{time:'15:00', title: '', content: '<b>Пешеходная экскурсия «Европейский квартал».</b><br/>(Главный корпус – Инженерный корпус – Физический корпус – Химический корпус –  Горный корпус). <p>Экскурсия об истории строительства исторического кампуса вуза, часть зданий которого стали памятниками архитектуры федерального и регионального значения.</p>'},
			{time:'19:00', title: '', content: '<b>Пешеходная экскурсия «Европейский квартал».</b><br/>(Главный корпус – Инженерный корпус – Физический корпус – Химический корпус –  Горный корпус). <p>Экскурсия об истории строительства исторического кампуса вуза, часть зданий которого стали памятниками архитектуры федерального и регионального значения.</p>'},
		]
	},
	{
		id: 3,
		data_title: '3 Сентября',
		events: [
			{time:'12:00', title: '', content: '<b>Обзорная экскурсия по историческому залу Музея истории ТПУ. (Главный корпус, ауд. 315).</b><p>Экскурсия об истории создания и открытия ТТИ, первых отделениях, профессорах и выпускниках; о деятельности вуза в разные периоды времени.</p>'},
			{time:'12:00', title: '', content: '<b>«Тайны Главного» – экскурсия по Главному корпусу ТПУ. (Главный корпус). </b><p>Экскурсия по Главному корпусу ТПУ: история строительства корпуса, о первом названии корпуса, о первых аудиториях с заходом в Актовый зал, а также рассказ о «деталях» и символах Томского политеха.</p>'},
			{time:'15:00', title: '', content: '<b>Обзорная экскурсия по историческому залу Музея истории ТПУ. (Главный корпус, ауд. 315).</b><p>Экскурсия об истории создания и открытия ТТИ, первых отделениях, профессорах и выпускниках; о деятельности вуза в разные периоды времени.</p>'},
			{time:'15:00', title: '', content: '<b>«Тайны Главного» – экскурсия по Главному корпусу ТПУ. (Главный корпус). </b><p>Экскурсия по Главному корпусу ТПУ: история строительства корпуса, о первом названии корпуса, о первых аудиториях с заходом в Актовый зал, а также рассказ о «деталях» и символах Томского политеха.</p>'},
		]
	},
	{
		id: 4,
		data_title: '4 Сентября',
		events: [
			{time:'13.00', title: '', content: 'Шествие студентов инженерных и исследовательских школ ТПУ (ул. Вершинина (построение на участке от ул. Учебной до ул. Полины Осипенко) – проезд Вершинина – ул. Лыткина – ул. 19-й Гвардейской Дивизии – стадион «Политехник»)'},
			{time:'14.30', title: '', content: 'Парад участников соревнований, посвященных началу нового учебного года. Старт спортивных испытаний'},
			{time:'15.00', title: '', content: 'Работа интерактивных развлекательных площадок, презентация студенческих объединений ТПУ'},
			{time:'16.30', title: '', content: 'Концертно-развлекательная программа «Политех, полетели!». Розыгрыш ноутбука среди первокурсников'},
		]
	},
]

export const linksArr = [
	{name:'Первокурсникам', href:'/#welcome'},
	{name:'Календарь', href:'/#calendar'},
	// {name:'Розыгрыш', href:'/#event'},
	{name:'Справочник', href:'/guide'},
	{name:'Мерч ТПУ', href:'https://shop.tpu.ru/'},
]

export default function MainPage(){

	useEffect(() => {
		Aos.init();
	},[])
	const [videoPlaying, setVideoPlaying] = useState(false)
	const vidRef = useRef(null);
	const vidBtnRef = useRef(null);

	const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

	const handlePlayVideo = () => {
		if(!videoPlaying) {
			vidRef.current.play();
			vidRef.current.controls = true
			vidRef.current.style.objectFit = ''
			vidBtnRef.current.style.display = 'none'
		}
		setVideoPlaying(!videoPlaying)
	}
		

	return(
		<MainLayout>
			<div className="top_index">
				<div className='sky_top position-absolute'></div>
				<Navigate linksArr={linksArr}/>
				<div className="container">
					<div className='row'>
						<div className='col-lg-6 mt-5' style={{zIndex:10}}>
							<div className='main_top_title mt-xl-5 pt-xl-5' data-aos="zoom-out" data-aos-duration="800" style={{lineHeight:0}}>
								{/* <span>Миру нужны</span><br/>
								<span className='b_gc'>инженеры</span> */}
								<img src={Slogan1} className="img-fluid" alt="Slogan1"/><br/>
								<img src={Slogan2} className="img-fluid" alt="Slogan1"/>
							</div>
							<div data-aos="zoom-out" data-aos-duration="2000" className='mt-4 mt-xl-5'>Думай. Учись. Действуй</div>
						</div>
						{/* <div className='col-lg-6 mt-xl-5'>
							<video data-aos="zoom-in" className='mt-xl-5' data-aos-duration="600" width="100%" height={450} autoPlay loop muted>
								<source src={`${TopVideo}`} type="video/mp4"/>
							</video>
						</div> */}
					</div>
					<div className='man position-absolute'><img src={Man} alt="Man"/></div>
				</div>
				<div className='erath position-absolute'><img src={Erath} alt="Erath"/></div>
				<div className='sky_bot position-absolute'></div>
			</div>
			<div style={{position: 'relative'}} id="welcome">
				
				<div className="rektor_block pb-4">
					<div className="back_gc1 text-white py-5">
						<div className="container">
							<h2 className='title_block'>Добро пожаловать в <span className='text-black' data-aos="fade-up" data-aos-duration="1000">Томский политех,</span> дорогие первокурсники!</h2>
						</div>
					</div>
					<div className="container pt-5">
						<div className="row pt-4" data-aos="fade-up">
							<div className="col-md-4 mt-3">
								<img src={Rector} className="img-fluid" alt="Rector"/>
							</div>
							<div className="col-md-7 mt-3">
								<div>
									<p><b>Дмитрий Седнев</b>, и.о. ректора ТПУ</p>
									<p>
										Я приветствую вас от имени студентов, преподавателей, ученых и сотрудников университета — нашей большой и дружной команды! Очень скоро со многими политехниками вы познакомитесь лично — в аудиториях и лабораториях, в библиотеке или коворкинге, на наших общих праздниках или просто в кампусе. Многие из них станут вашими учителями и друзьями, а некоторые — героями и примером для подражания.
									</p>
									<p>
										Но главное, что теперь вы тоже политехники! Начинается самое интересное, яркое, продуктивное время, где будет много всего — знания, открытия, творчество. А еще будет много труда и выбора: на что потратить драгоценное время, к чему приложить усилия, чтобы получить лучший результат? Не теряйтесь! Используйте все возможности, рискуйте и экспериментируйте! Вам это позволено и нужно, а в Томском политехе так принято. Ведь мы — инженеры, люди, которые обдуманно и ответственно создают будущее. Чем больше вы попробуете и узнаете в студенчестве — тем шире будет ваш профессиональный кругозор. Миру нужны инженеры, которые мыслят смело!
									</p>
									<p>
										Я поздравляю вас с началом первого учебного года в Томском политехническом университете! Вас всегда здесь поддержат, помогут сориентироваться и преодолеть трудности. Ваша миссия «Инженер» начинается сейчас. Всё будет хорошо, политехники! Удачи вам! 
									</p>
								</div>
								{/* <div className='d-flex align-items-center gap-4 mt-5' data-aos="fade-up" data-aos-duration="2000">
									<div><img src={Sednev} alt="rector TPU"/></div>
									<div className='mt-5'>
										<p className='text-end pt-2'>
											<img width={150} src={Signature} alt="Signature"/>
										</p>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
				
			</div>
				
			<div className="index_video my-5" data-aos="fade-up" data-aos-duration="1000">
				<div ref={vidBtnRef}><FontAwesomeIcon icon={faPlayCircle} className="video_btn" onClick={handlePlayVideo}/></div>
				<video ref={vidRef} width='100%' style={{maxHeight:'500px', objectFit:'cover'}} poster={Poster}>
					<source src={Video}/>
				</video>
			</div>
				
			<div className="calendar my-5 py-lg-5" id="calendar">
				<div className="timeline">
					<div className="container">
						<div className="row align-items-center" data-aos="zoom-in">
							<div className="col-md-3">
								<h2 className="navbar-brand">Календарь</h2>
							</div>
							<div className="col-md-9">
								<ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
								{calendarEvents.map((tab, i) => (
									<TabNav key={i} id={`ftab${tab.id}`} dataBsTarget={`tab${tab.id}`} active={tab.id === 1 && true}>{tab.data_title}</TabNav>
								))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="container my-4 pb-5">
					<div className="tab-content" id="myTabContent">
						{calendarEvents.map(tab => (
							<TabContent key={tab.id} id={`tab${tab.id}`} classes={["tab-pane", "fade", "show", tab.id === 1 && "active"]}>
								{tab.events.map((event, indx) => (
									<Event key={indx}>
										<div data-aos="fade-right" className="col-md-2 col-4 text-center event-time">
											{event.time}
										</div>
										<div data-aos="fade-left" className="col-md-10 col-8 event-content">
											{event.title && <h5 className="fw-bold">{event.title}</h5>}
											{renderHTML(event.content)}
										</div>
									</Event>
								))}
							</TabContent>
						))}
					</div>
				</div>
				<div className='container mt-4 mb-5'>
					<div className='guide-box guide_beauty_box_2'>
						<h2>Внимание!</h2>
						Экскурсии бесплатные, количество мест в группе ограничено.  Регистрация по телефону +7 (3822) 70-56-71 или через сообщения в группе <a href='https://vk.com/kmtpu' className='text-white' target='_blank'>https://vk.com/kmtpu</a>
					</div>
				</div>
			</div>
			<div className="challenge_block" id="event">
				<div className="container challenge_desc">
					<div className="row pb-5">
						<div className="col-md-4 my-5 position-relative" style={{zIndex:1}}>
							<div className='my-lg-4'>Только для первокурсников</div>
							<div className='pb-lg-4'><h2>Выиграй ноутбук<br/> для учебы</h2></div>
							<div className='foldtr'>и отдыха</div>
						</div>
						<div className="col-md-8 my-2 print_block position-absolute">
							<div className='pain d-none d-md-block' data-aos="fade-left" data-aos-duration="2500"><img src={Paint} alt="paint"/></div>
							<div className='warrior d-none d-md-block'><img src={Warrior} alt="Warrior"/></div>
							<div className='book1'><img src={book1} alt="book1"/></div>
							<div className='book2'><img src={book2} alt="book2"/></div>
						</div>
					</div>
				</div>
				<div>

				</div>
			</div>
			<div className="container challenge mt-5">
				<div className="row pb-lg-5">
					<div className="col-lg-4 my-2 my-4">
						<div className="ch_num">1</div>
						<div className="mt-3">
							Подпишись на наши соцсети
							<div className='d-inline-block'>
								<SocialPanel clsBlock={['d-flex', 'mt-1']} clsLink={['nav-link', 'active', 'soc_panel', 'p-2']}/>
							</div>
						
						</div>
					</div>
					<div className="col-lg-2 my-2 my-4">
						<div className="ch_num">2</div>
						<div className="mt-3 pt-3">Заполни <a href="https://forms.gle/yiJzK2UuMHRX9b8H8">анкету</a></div>
					</div>
					<div className="col-lg-4 my-2 mt-4 mb-5">
						<div className="ch_num">3</div>
						<div className="mt-3 pt-3">Приходи на праздник 4 сентября</div>
					</div>
				</div>

			</div>

			<div className="guide_block my-5">
				<h2 className="text-center pb-4">Справочник первокурсника</h2>
				<GuidePanel/>
			</div>

		</MainLayout>
	)
}