import React from 'react'
import "./CarWidget.css"

const CraWidget = () => {
    const imgCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIE5iO0OJjkMMnAk-QD42pX8IUcy2GmE4ZtvM-fQI&s"
  return (
    <div>
        <img className="imgCarrito" src={imgCarrito} alt="carrito" />
    </div>
  )
}

export default CraWidget