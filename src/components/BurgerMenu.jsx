import { useState, useEffect } from 'react'
import burgerpng from '../assets/bars-staggered.png'
import ThemeSwitcher from './ThemeSwitcher'

export default function BurgerMenu() {
    const [visible, setVisibility] = useState(false)
     
    const handleClick = () => {
        setVisibility(!visible)
    }

    useEffect(() => {
        if (visible) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [visible]);

    return(
        <>
            <img src={burgerpng} id='nav-bar' alt="burger-menu" className='absolute right-10 h-10 w-10 min-[796px]:hidden' onClick={handleClick}/>

            { visible && 
                <container className='flex flex-col w-full h-screen absolute top-0 left-0 z-1000 gap-5' id='burger-menu'>
                    <nav className='flex flex-row justify-between mr-10 ml-10 mt-10'>
                        <p className='text-[40px]'>Forstå alt</p>
                        <img id='nav-bar' src={burgerpng} alt="burger-menu" className='h-10 w-10 mt-3' onClick={handleClick}/>
                    </nav>

                    <div id='divider-bar' className='h-1 ml-10 mr-10 rounded-xs mt-5'/>
                    
                    <div className='flex flex-col gap-10 mt-5'>
                        <p onClick={handleClick} id='nav-bar'>About</p>
                        <div id='divider-bar' className='h-1 ml-10 mr-10 rounded-xs'/>
                        <p onClick={handleClick} id='nav-bar'>Services</p>
                        <div id='divider-bar' className='h-1 ml-10 mr-10 rounded-xs'/>
                        <p onClick={handleClick} id='nav-bar'>Coaching</p>
                        <div id='divider-bar' className='h-1 ml-10 mr-10 rounded-xs'/>
                        <p onClick={handleClick} id='nav-bar'>kontakt mig</p>
                        <div id='divider-bar' className='h-1 ml-10 mr-10 rounded-xs'/>
                    </div>

                    <div className='absolute bottom-15 left-5 flex flex-row gap-10 ml-10'>
                        <SoMeButton />
                    </div>

                    <div className='absolute bottom-15 right-15'>
                        <ThemeSwitcher />
                    </div>
                </container>
            }
        </>
    );

}