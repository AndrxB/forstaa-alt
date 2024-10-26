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
          <nav><AboutMe/></nav>
        </header>

      <body className="main-content-container">
        <div className="left-content-container" />

        <div className="middle-content-container">        
          <div className='asides-container'>
            <aside className='left-aside'><Recommendations /></aside>
            <aside className='right-aside'><Mainbody /></aside>
          </div>
        </div>
        <div className="right-content-container" />
      </body>

      <section><ExtraInfoButton /></section>
      
    </>  
  )
}

export default App
