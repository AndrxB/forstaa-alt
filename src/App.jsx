import { useState } from 'react'
import './App.css'
import Mainbody from './components/mainbody'
import AboutMe from './components/AboutMe'
import Title from './components/Title'
import ExtraInfoButton from './components/ExtraInfoButton'



function App() {
  const [count, setCount] = useState(0)

  return (
    // <p><ExtraInfo /></p>
    <>
      <header><Title /></header>
      <section><Mainbody /></section>

      <ExtraInfoButton />
      <footer><AboutMe /></footer>
    </>
  )
}

export default App
