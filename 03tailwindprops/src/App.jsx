import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: 'vishal',
    age: 21
  }

  let myArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card username='vishal' btnText='click me' />
      <Card username='kamble' />
    </>
  )
}

export default App
