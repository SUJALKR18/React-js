import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import ShoppingCard from "./components/ShoppingCard";


function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    name : 'Sujal',
    age : 35,
    address : {
      city : 'Bokaro',
      state : 'Jharkhand',
      country : 'India'
    }
  }
  return (
    <div className="space-y-4">
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="Sujal" />
      <ShoppingCard />
    </div>
  );
}

export default App
