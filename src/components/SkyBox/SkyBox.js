import classes from './Sky.module.css'
export default function SkyBox() {

    // let bg = document.querySelector('.mouse-parallax-bg');
    // window.addEventListener('mousemove', function(e) {
    //     let x = e.clientX / window.innerWidth;
    //     let y = e.clientY / window.innerHeight;  
    //     bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    // });

    function handlerMouseMove(el){
        console.log(el)
        let bg = el.target;
        window.addEventListener('mousemove', function(e) { 
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;     
            bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        });    
        
    }

	return(
		<div onMouseMove={(e) => handlerMouseMove(e)} className={classes.sky}></div>
	)
}