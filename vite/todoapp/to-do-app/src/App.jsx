import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Home/>
    </div>
  )
}

export default App