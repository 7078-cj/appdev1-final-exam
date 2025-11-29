import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Todos from './pages/Todos'
import { ThemeProvider } from './ThemeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter basename="/appdev1-final-exam">
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>

  )
}

export default App