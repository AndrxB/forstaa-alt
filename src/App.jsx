import { useState } from 'react'
import './App.css'
import Mainbody from './components/Mainbody'
import AboutMe from './components/AboutMe'
import Title from './components/Title'
import ExtraInfoButton from './hooks/ExtraInfoButton'
import Recommendations from './components/Recommendations'



function App() {
  return (  
    <>
      <header><Title /></header>

      {/* Wrap the aside elements in a div for layout */}
      <div className='asides-container'>
        <aside className='left-aside'><Recommendations /></aside>
        <aside className='right-aside'><Mainbody /></aside>
      </div>
      <section><ExtraInfoButton /></section>
    </>
  )
}

export default App
