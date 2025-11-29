import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const nav = useNavigate()
  return (
    <div>
        <h1>Welcome to the Todo App</h1>
        <a onClick={()=> nav('/login')}>login</a>
    </div>
  )
}

export default Home