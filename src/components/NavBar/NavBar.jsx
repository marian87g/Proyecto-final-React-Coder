import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div>
        <h1>logo</h1>

        <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Mi cuenta</a></li>
            <li><a href="">Contactanos</a></li>
        </ul>

        <CartWidget />
    </div>
  )
}

export default NavBar