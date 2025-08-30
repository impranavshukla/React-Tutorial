import { useState,useCallback } from 'react'

function App() {
  
const [length,setLength]=useState(8);
const [numAllowed,setNumAllowed]=useState(false);
const [charAllowed,setCharAllowed]=useState(false);
const [password,setPassword]=useState('Password');


const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(numAllowed) str+="0123456789";
  if(charAllowed) str += "!@#$%^&*()-_=+[]{};:,.<>/?|~";

  for (let i=1; i <= length; i++) {
    let char =Math.floor(Math.random()* str.length+1)
    pass=str.charAt(char)
    
  }
  setPassword(pass)

},[length,numAllowed,charAllowed,setPassword])
return (
  <>      
    <div className="w-full max-w-lg mx-auto shadow-lg rounded-2xl px-6 py-6 my-16 bg-gray-900">
      
      {/* Title */}
      <h1 className="text-white text-center text-2xl font-semibold mb-6">
        Password Generator
      </h1>

      {/* Input + Button */}
      <div className="flex shadow-inner rounded-lg overflow-hidden mb-4 bg-gray-800">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-3 px-4 bg-gray-800 text-lg text-gray-100 placeholder-gray-400"
          placeholder="Your password"
          readOnly
        />
        <button 
          
           className="bg-blue-600 hover:bg-blue-800 text-white font-medium px-4 py-2 transition-colors duration-200 rounded-r-lg"
        >
          Copy
        </button>
      </div>

    </div>
  </>
)


}

export default App
