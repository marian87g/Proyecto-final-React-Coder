import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Titulo from './components/Titulo/Titulo'
import Formulario from './components/Formulario/Formulario'

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <div className="App">
      <Titulo />
      <Formulario />
    </div>
  )
}

export default App
