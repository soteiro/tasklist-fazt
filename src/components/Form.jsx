import { useState, useEffect } from "react"

export function Form(){
    
    const [mensaje , setMensaje] = useState('')

    useEffect(()=>{
        console.log("render")
    }, [ ])

    return <div className=" bg-white shadow-md rounded-lg p-4 m-4">
        <form >
            <input className="bg-gray-200 text-gray-700 border-gray-200 rounded-lg p-2 w-full padding-2" type="text" placeholder="escribe tu mensaje" onChange={(e)=>{
                setMensaje(e.target.value)
            }}/>
            <p></p>
            <button onClick={(e)=>{
                e.preventDefault();
                alert(`mensaje enviado: ${mensaje}`)
            }}>
                enviar
            </button>
        </form>
    </div>
}

