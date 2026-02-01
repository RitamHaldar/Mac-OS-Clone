import { useState } from 'react'
import './App.scss'
import Dock from './Components/dock'
import Navbar from './Components/Navbar'
import MacWndow from './Components/Windows/MacWndow'
import Github from './Components/Windows/Github'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <Dock/>
      <Github/>
    </main>
  )
}

export default App
