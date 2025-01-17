import { useState } from 'react'

function App() {
  const [counter , setCounter]  = useState(15)
  function addValue(){
    setCounter(counter + 1)
  }
  function removeValue(){
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>React Course with Hitesh {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button 
      onClick = {addValue}>Add Value : </button> {" "}
      <button
      onClick = {removeValue}>Remove Value : </button>
      <p>Footer : {counter}</p> 

    </>
  )
}

export default App
