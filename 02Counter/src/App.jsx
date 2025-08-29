import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);


   // let counter=0;

    const addValue =()=>{
      console.log("Value added ",counter);
      counter=counter+1;
      setCounter(counter);
                // OR
      // setCounter(counter+1);
    }

    const removeValue=()=>{
      counter=counter-1;
      setCounter(counter);
    }
  return (
   <>
   <h1>Hello folks</h1>
    <h2>Counter value : {counter}</h2>
    <button onClick={addValue}> Add value  {counter} </button>
    <button onClick={removeValue}>Remove value</button>

    <p> {counter}</p>
   </>
  )
}

export default App
