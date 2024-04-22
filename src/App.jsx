import { useState } from 'react'
import Home from './pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=" relative bg-green-50 h-full   font-jakata w-screen">
      <Home/>
    </div>
  )
}

export default App
