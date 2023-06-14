import React from 'react'
import { useState } from 'react'

const ItemCount = () => {
const [contador, setContador] = useState(1)

let stockMinimo = 1;
let stockMaximo = 10;

const incrementar = () => {

    if(contador < stockMaximo){
    setContador(contador +1)
} else{ alert("Lo siento, no contamos con esa cantidad en stock.")}
}

const decrementar = () => {

    if(contador > stockMinimo){
    setContador(contador -1)
}}

  return (
    <>
    <button onClick={incrementar}>+</button>  <br/><br/>
    <p>{contador}</p> <br/>
    <button onClick={decrementar}>-</button> <br/><br/>

    </>
  )
}

export default ItemCount