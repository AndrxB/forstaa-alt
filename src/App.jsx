import { useState } from 'react'
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher'
import Themes from './colourthemes.json'
import text from './text.json'

function App() {


  return (
    <>
      <header className='absolute left-0 top-0 flex flex flex-col gap-30 pb-15 z-100' id='top-Nav'>
      <div className='flex-row items-center justify-self w-screen justify-between'>
          <div className='ml-10'>
          <button>insta</button>
          <button>LinkedIn</button>
        </div>
        <div>
          <p className='text-[50px]'>Forstå alt</p>
          <nav className='flex-row gap-15'>
            <p>asd</p>
            <p>asd</p>
            <p>asd</p>
          </nav>
        </div>
        <div className='mr-10'>
          <ThemeSwitcher />
          <button>Kontakt mig</button>
        </div>
      </div>
        
      <div>
        <p className='text-[25px]'>Lorem ipsum</p>
        <p className='ml-50 mr-50 text-[50px]'>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
      </div>
    </header>

      <main className='absolute flex flex-col top-80 left-0 w-screen gap-10'>
        <div id='intro-placeholder' className='visible my-10 h-150'>(placeholder image)</div>
        <div className='ml-50 mr-50 mb-30'>
          <p>{text.text1.content}</p>
        </div>
        <div id='divider-bar' className='h-1 ml-10 mr-10 rounded-xs'/>

        <div className='flex-1 flex flex-row items-center ml-10 mr-10 gap-10 pb-100'>
          <div className='flex-none w-1/2'>
            <p className='text-[30px]'>Hvordan foregår det?</p>
          </div>

          <div className='flex-1 flex flex-col flex-wrap items-center justify-self gap-10'>
            <p>asdasda</p>
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

      </main>
    </>
  )
}

export default App
