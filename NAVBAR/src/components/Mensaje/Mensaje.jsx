import React from 'react'
import { useState } from 'react'

const Mensaje = () => {

const [mensaje, setMensaje] = useState(false)

const manejadorMensaje = () => {
    setMensaje(!mensaje)
}

return (
    <div>
        <button onClick={manejadorMensaje}>{mensaje ? "OCULTAR DESCUENTO" : "MOSTRAR DESCUENTO"}</button>
        {mensaje && <h3>OBTENÉ TU CODIGO CON 20% OFF !!!</h3>}
    </div>
)
}

export default Mensaje