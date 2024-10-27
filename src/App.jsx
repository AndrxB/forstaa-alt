import './App.css'
import Mainbody from './components/Mainbody'
import AboutMe from './components/AboutMe'
import Title from './components/Title'
import ExtraInfoButton from './hooks/ExtraInfoButton'
import Recommendations from './components/Recommendations'



function App() {
  return (
    <>
      <header>
          <Title />
          <nav>
            
          </nav>
        </header>

      <body className="main-content-container">
        <section id="hidden" className="left-content-container" />
        <section className="middle-content-container">  

          <section className="asides-container">
            <aside className='left-aside'> <Mainbody /> </aside>
            <aside className='right-aside'> <Recommendations /> </aside>
          </section>
          <section><ExtraInfoButton /></section>

        
        </section>
        <section id="hidden" className="right-content-container" />
      </body>
      
    </>  
  )
}

export default App
