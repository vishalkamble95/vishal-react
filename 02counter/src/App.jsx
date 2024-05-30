import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {

    if(counter >= 20){
      alert("counter value should be less than 20")
    } else {
      setCounter((prvCounter) => prvCounter + 1)
      // setCounter(prvCounter => prvCounter + 1)
      setCounter((prvCounter) => prvCounter + 1)
      setCounter((prvCounter) => prvCounter + 1)
      setCounter((prvCounter) => prvCounter + 1)
    }
  }
  
  const removeValue = () => {
    
    if(counter <= 0){
      alert("counter value should be greater than 0")
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>

      <br />

      <button
      onClick={removeValue}
      >remove value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
