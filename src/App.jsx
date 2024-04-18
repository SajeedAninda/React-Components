import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown from './Components/Dropdown'
import Switch from './Components/Switch'
import AnimatedButton from './Components/AnimatedButton'

function App() {

  return (
    <>
      <Dropdown></Dropdown>
      <Switch></Switch>
      <AnimatedButton></AnimatedButton>
    </>
  )
}

export default App
