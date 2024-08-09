import { useEffect, useState } from 'react'
import loopGif from '../assets/fyEP_light.gif'
import '../styles/Header.scss';

export default function Header(){
    const [scroll, setScroll] = useState(0);
    const [lowerThanLine, setLowerThanLine] = useState(false);
    const [isHiddenNavInHeader, setIsHiddenNavInHeader] = useState()

    const handleScroll = () => {
      setScroll(window.scrollY);
      if (window.scrollY > 600) {
        setLowerThanLine(true);
        setIsHiddenNavInHeader(true)
      } else {
        setLowerThanLine(false);
        setIsHiddenNavInHeader(false)
      }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
       
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return (
        <>
        <header className='header'> 
            <div className="header__inner">
                  <picture className='header__gif_cont'>
                    <img src={loopGif} alt="" className='header__gif '/>
                    <div class="overlay"></div>
                    
                    <div className={`header__nav ${isHiddenNavInHeader ? 'hidden' : ''}`}>
                        <h1 className='gif_text fontt text-7xl  max-lg:text-5xl  max-md:text-4xl max-sm:text-3xl max-xs:text-xl  flex justify-center'>Burnd</h1>
                            <ul className='nav'>
                                <li> <a href="#about" className='title uppercase max-md:text-sm max-xs:text-xs'>About</a> </li>
                                <li> <a href="#footer" className='title uppercase max-md:text-sm max-xs:text-xs'>Social</a> </li>
                            </ul>
                    </div>
                 
                    
                  </picture>
            </div>
        </header>
     
        <div className={`header__nav_scrolling ${lowerThanLine ? '' : 'hidden'} `}>
                        <h1 className='gif_text fontt text-7xl max-lg:text-5xl  max-md:text-4xl max-sm:text-3xl max-xs:text-xl flex justify-center'>Burnd</h1>
                            <ul className='nav'>
                                <li> <a href="#about" className='title uppercase max-md:text-sm max-xs:text-xs'>About</a> </li>
                                <li> <a href="#footer" className='title uppercase max-md:text-sm max-xs:text-xs'>Social</a> </li>
                            </ul>
        </div>
        </>
    )
}