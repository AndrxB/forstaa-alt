import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher'
import text from './json/text.json'
import BurgerMenu from './components/BurgerMenu'
import SoMeButton from './components/someButton'
import stockPhotoVertical from './assets/stock-photo-vertical.jpg'
import teacherHorizontal from './assets/teacher-stock-selfie.jpg'

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
            <SoMeButton constraints={'max-[796px]:hidden'} />
          </div>

          <div className='flex flex-col'>
            <p className='text-[40px]' id='app-name'>Forstå alt</p>
            <nav className='flex flex-row gap-10'>
              <div className='max-[796px]:hidden' id='nav-bar'>About</div>
              <div className='max-[796px]:hidden' id='nav-bar'>Services</div>
              <div className='max-[796px]:hidden' id='nav-bar'>Coaching</div>
            </nav>
          </div>

          <div className='flex flex-row gap-2 items-center mr-10'>
            <ThemeSwitcher constraints='max-[796px]:hidden'/>
            <button className='max-[796px]:hidden'>Kontakt mig</button>
          </div>
          <BurgerMenu />
        </div>

        <div className='flex flex-col items-center justify-center w-full' >
          <p className='text-[20px]'>{text.frontpage.smalltitle}</p>
          <h1 className='text-[40px] text-center'>{text.frontpage.bigtitle1}</h1>
          <h1 className='text-[40px] text-center'>{text.frontpage.bigtitle2}</h1>
        </div>
      </header>

      <main className='absolute flex flex-col top-150 left-0 w-screen gap-10'>
        <img 
          src={teacherHorizontal} 
          className="h-[700px] w-auto object-cover max-w-none"
        />


        <h1>{text.frontpage.threepillartitle}</h1>

        <div className='ml-50 mr-50 mb-30 flex flex-row flex-wrap justify-center gap-10 mt-10 max-[796px]:mr-5 max-[796px]:ml-5'>
          <div className='flex flex-col w-50 gap-10'>
            <h3 className='text-[25px]'>{text.frontpage.pillar1title1}</h3>
            <span>{text.placeholders['1s']}</span>
            {/* {text.frontpage.pillar1} */}
          </div>
          <div className='flex flex-col w-50 gap-10'>
            <h3 className='text-[25px]'>{text.frontpage.pillar1title2}</h3>
            <span>{text.placeholders['1s']}</span>
            {/* {text.frontpage.pillar2} */}
          </div>
          <div className='flex flex-col w-50 gap-10'>
            <h3 className='text-[25px]'>{text.frontpage.pillar1title3}</h3>
            <span>{text.placeholders['1s']}</span>
            {/* {text.frontpage.pillar3} */}
          </div>
        </div>
        <div id='divider-bar' className='h-1 ml-10 mr-10 rounded-xs'/>

        <div 
          className='flex-1 flex flex-row items-start ml-10 mr-10 gap-40 flex-wrap justify-center
          max-[796px]:mr-20 max-[796px]:ml-20'
        >
          <div 
            className='w-1/3 flex flex-col gap-10
            max-[768px]:w-screen'
          >
            <h1 className='text-[30px]'>Hvordan foregår det?</h1>
            {/* <span>{text.frontpage.title2answer}</span> */}
            <span>{text.placeholders['3s']}</span>
          </div>

          <div className='w-1/3 flex flex-row flex-wrap items-center justify-self gap-10'>
            <div className='flex flex-col gap-5'>
                {text.frontpage.contentgrid1}
                <a href='_blank'> Find din ordbog her </a>
              </div>
              <div className='flex flex-col gap-5'>
                {text.frontpage.contentgrid2}
                <a href='_blank'> Sådan laver du et demokit </a>
              </div>
          </div>
        </div>

        <div id='divider-bar' className='h-1 ml-10 mr-10 rounded-xs'/>

        <div className='pb-[100px] flex flex-row-reverse flex-wrap items-start justify-center ml-10 mr-10'>
          <div className='w-1/2 flex flex-col gap-5'>
            <h1 className='text-[30px]'>{text.frontpage.contentquestion}</h1>
            <span>{text.frontpage.content}</span>
          </div>

          <div className='w-1/2 flex flex-col gap-10 items-center'>
            <img src={stockPhotoVertical} alt='stockphoto' className='w-75' />
          </div>
        </div>


        <footer className='absolute w-screen bottom-0 pr-10 flex items-center flex-row justify-end'>
          <span>Er du interreseret?</span>
          <button>kontakt mig</button>
        </footer>
      </main>
    </>
  )
}

export default App
