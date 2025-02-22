import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaiTap1 from './components/BaiTap1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BaiTap1></BaiTap1>
    </>
  )
}

export default App
