import { useState } from 'react'
import './App.scss'
import Dock from './Components/dock'
import Navbar from './Components/Navbar'
import MacWndow from './Components/Windows/MacWndow'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <Dock/>
      <MacWndow>
      </MacWndow>
    </main>
  )
}

export default App
