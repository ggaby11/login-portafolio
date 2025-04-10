import { useState } from 'react'
import './index.css'

function App() {
  return (
      <div id='fondo' className='h-screen w-screen bg-blue-100'>
        <div className='h-1/4'></div>
        <div id='contenedor' className='flex text-center items-center ml-20 mr-20 h-100 justify-center border border-1g border-gray-300 shadow-lg bg-red-100'>
          <div id='ingreso' className='flex flex-col w-1/2 bg-pink-100'>
            <p className='text-2xl'>Ingresa Sesión con</p>
            <p>o ingresa usando tu cuenta</p>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Contraseña'/>
            <button>¿Olvidaste tu contraseña?</button>
            <button>Ingresar</button>
          </div>
          <div id='registro' className='flex flex-col items-center w-1/2 bg-white'>
            <p className='text-2xl'>¿Aún no estas registrado?</p>
            <p className='text-xl'>¡ingresa tus datos e inicia el viaje con nosotros!</p>
            <button>Registrarse</button>
          </div>
        </div>
      </div>
  )
}

export default App
