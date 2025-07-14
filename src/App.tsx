import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './Routes/Route'
import Navbar from './components/navbar/Navbar'
import MotocycleMenu from './components/motocycle/MotocycleMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {AppRoutes}
    </>
  )
}

export default App
