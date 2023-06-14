import React from 'react'
import { useState } from 'react'
import "./Vistas.css"

const Vistas = () => {

const [modoOscuro, setModoOscuro] = useState(false)

const cambiarModo = () =>{
    setModoOscuro(!modoOscuro)
}

const estilo = modoOscuro ? "oscuro" : "claro"

  return (
    <div className = {estilo}>
        <br />
        <button onClick={ cambiarModo }>{ modoOscuro ? "MODO CLARO" : "MODO OSCURO" }</button>
        <h3>ESTAS EN LA SECCIÓN DE VISTAS</h3>
        <p>En este sector practicamos las vistas de modo oscuro y modo claro que personaliza la preferencia del usuario con la utilización de HOOKS, en este caso utilizamos, al igual que en el contador y el mensaje, useState. Como pueden ver inicializamos el estado con false. Lo primero que se debe hacer es importar el HOOK, luego desestructurar el array de valores que me devuelve el useState, igualandolo por supuesto a useState con el parametro correspondiente al estado de inicio. Recordar que los valores del array son:</p>
        <p> * El 1ro EL VALOR DEL ESTADO ACTUAL, y </p>
        <p> * El 2do corresponde a la FUNCION QUE MODIFICA ESE ESTADO. </p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptatum repudiandae. Ad ratione ex nam architecto ducimus, error ipsum quidem doloremque consectetur, perspiciatis tempora? Illo reiciendis ipsum pariatur veniam perferendis!</p>
        <br />
        Opsum dolor sit amet consectetur adipisicing elit. Dolorum laudantium labore deleniti incidunt repudiandae aperiam. Dolore, officiis qui, aspernatur ullam veritatis alias cum quo, nesciunt tempora ratione omnis quisquam fugit.
    </div>
  )
}

export default Vistas