import { useState } from 'react'
import { BoomBox } from './components/Boombox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BoomBox />
    </div>
  )
}

export default App
