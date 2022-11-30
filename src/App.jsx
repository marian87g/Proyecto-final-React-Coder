import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Titulo from './components/Titulo/Titulo'
import Formulario from './components/Formulario/Formulario'
import HomeApp from './components/HomeApp/HomeApp'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className="App">
      
      <HomeApp  />
    </div>
  )
}

export default App
