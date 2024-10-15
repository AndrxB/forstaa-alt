import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainbody from './components/mainbody'
import KontaktMig from './components/KontaktMig'
import ExtraInfo from './components/ExtraInfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>[insert name here]</h1>
      <Mainbody />
      <KontaktMig />
      <ExtraInfo />
    </>
  )
}

export default App
