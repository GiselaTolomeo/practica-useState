import React from 'react'
import "./NavBar.css"
import CarWidget from '../CarWidget/CarWidget'

const NavBar = () => {
  return (
    <header>
        <h1>TRAINNIN STAR</h1>
        <h2>Tienda On Line</h2>
        <nav>
                <ul>
                    <li>MEN</li>
                    <li>MAN</li>
                    <li>KIDS</li>
                    <li>ARRIVES</li>
                </ul>
        </nav>
        <CarWidget/>
    </header>
  )
}

export default NavBar