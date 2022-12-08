import cls from './Loader.module.css'
import TopVideo from '../../video/loader.mp4'

export default function Loader({fullPage = true}){
    return (
        <div className={fullPage ? cls.preloader : cls.preloader_page}>
            <div className={cls.preloader__img}>
                {/* <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span> */}
                <video className='mt-xl-5' height={150} autoPlay loop muted>
                    <source src={`${TopVideo}`} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}