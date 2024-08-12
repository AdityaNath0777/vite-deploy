import { useState } from 'react'  
import './App.css'
import { Navbar } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-slate-900 '>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
