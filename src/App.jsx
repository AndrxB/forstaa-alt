import { useState } from 'react'
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher'
import Themes from './colourthemes.json'
import text from './text.json'
import BurgerMenu from './components/BurgerMenu'
import instagrampng from './assets/instagram.png'
import linkedinpng from './assets/linkedin.png'

function App() {


  return (
    <>
    
      <header 
        className='absolute left-0 top-0 flex flex-col align-center flex-nowrap
        items-center w-full gap-15 pb-10 z-100' 
        id='top-Nav'
      >
        <div 
          className='flex flex-row
          items-center w-full gap-5 pb-15 pt-10
          min-[796px]:justify-between'
        >
          <div className='flex-row gap-5 ml-10 min-[796px]:pr-30 max-[796px]:hidden'>
            <img className='max-[796px]:hidden' src={instagrampng} alt='Instagram' />
            <img className='max-[796px]:hidden' src={linkedinpng} alt='LinkedIn' />
          </div>

          <div className='flex flex-col'>
            <p className='text-[40px]'>Forstå alt</p>
            <nav className='flex flex-row gap-10'>
              <div className='max-[796px]:hidden'>About</div>
              <div className='max-[796px]:hidden'>Services</div>
              <div className='max-[796px]:hidden'>Coaching</div>
            </nav>
          </div>

          <div className='flex flex-row gap-2 items-center mr-10'>
            <ThemeSwitcher constraints='max-[796px]:hidden'/>
            <button className='max-[796px]:hidden'>Kontakt mig</button>
          </div>
          <BurgerMenu />
        </div>

        <div className='flex flex-col items-center justify-center w-full' >
          <p className='text-[20px]'>Lær at lære</p>
          <h1 className='text-[40px] text-center'>Undervisning</h1>
          <h1 className='text-[40px] text-center'>i dit tempo</h1>
        </div>

      </header>

      <main 
        className='absolute flex flex-col top-90 left-0 w-screen gap-10'
      >
        <div id='intro-placeholder' className='visible my-10 h-150'>(placeholder image)</div>
        <div 
          className='ml-50 mr-50 mb-30
          max-[600px]:ml-10 max-[600px]:mr-10
          '
        >
          <p>{text.text1.content}</p>
        </div>
        <div id='divider-bar' className='h-1 ml-10 mr-10 rounded-xs'/>

        <div className='flex-1 flex flex-row items-center ml-10 mr-10 gap-10 pb-100 flex-wrap justify-center'>
          <div className='flex-none w-1/2'>
            <p className='text-[30px]'>Hvordan foregår det?</p>
          </div>

          <div className='flex-1 flex flex-col flex-wrap items-center justify-self gap-10'>
            <div className='flex flex-row'>
              <div className='flex-1'>
                Lorem ipsum odor amet, consectetuer adipiscing elit.
              </div>
              <div className='flex-1'>
                Lorem ipsum odor amet, consectetuer adipiscing elit.
              </div>
            </div>
          </div>

        </div>

        <div id='divider-bar' className='h-1 ml-10 mr-10 rounded-xs'/>

        <div className='pb-100'>
          asdasda
        </div>

        <footer className='absolute w-screen bottom-0 h-40 pt-5 flex flex-col items-center justify-start gap-10'>
          <p className='text-[20px]'> Er du interreseret? </p>
          <div className='z-100'>
            <label>asd</label>
            <input className="border-solid p-2 z-100" placeholder='' />

          </div>
        </footer>

      </main>
    </>
  )
}

export default App
