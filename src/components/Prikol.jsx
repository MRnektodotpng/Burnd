import { useState,useEffect } from 'react'
import '../styles/Prikol.scss';

export default function Prikol(props){
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        
      const position = window.scrollY;
      setScrollPosition(position/2.5);
      console.log(position)
    };  
  
    useEffect(() => {
        const handleScrollThrottled = () => {
          requestAnimationFrame(handleScroll);
        };
        
        window.addEventListener('scroll', handleScrollThrottled);
        
        return () => {
          window.removeEventListener('scroll', handleScrollThrottled);
        };
      }, []);
  

    return (
        <>
        <div className="wrapper flex justify-center line__block py-10 max-lg:py-3">
            <svg width="100" height="500" xmlns="http://www.w3.org/2000/svg" className='line__between__blocks'>
                {/* <!-- Triangle rotated 180 degrees --> */}
                {props.isTriangleExist && <polygon points="50,20 60,0 40,0" stroke="white" fill="transparent" stroke-width="1"/>}
                {/* <!-- Line --> */}                                               
                <line x1="50" y1="20" x2="50" y2="400"  stroke="white" stroke-width="1" stroke-dasharray="500"  stroke-dashoffset="500" style={{'stroke-dashoffset':500 -scrollPosition  +'px'}}/>
            </svg>
            {/* <div style={line_blocker}></div> */}
        </div>
        
        
        </>
    )
}