import './app.css';
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialLinkedin } from "react-icons/ti";

function App() {
  return (
      <div id='fondo' className='h-screen w-screen bg-gray-100'>
        <div className='h-1/5'></div>
        <div id='contenedor' className='flex text-center items-center justify-center ml-20 mr-20 h-100 md:ml-80 md:mr-80 lg:ml-150 lg:mr-150 border rounded-xl shadow-2xl bg-white'>
          <div className='flex flex-col items-center justify-center w-1/2 h-full mr-10 ml-10'>
            <p className='text-2xl font-bold'>Ingresa Sesión con</p>

            <div className='flex gap-3 mt-2 mb-10'>
              <button id='social-media' className='bg-blue-800'><TiSocialFacebook /></button>
              <button id='social-media' className='bg-red-700'><TiSocialGooglePlus  /></button>
              <button id='social-media' className='bg-blue-500'><TiSocialLinkedin /></button>
            </div>

            <p>o ingresa usando tu cuenta</p>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Contraseña'/>
            <button id='btnRecuperar' className='mt-3 text-gray-700'>¿Olvidaste tu contraseña?</button>
            <button id='btnIngresar' className='mt-3'>Ingresar</button>
          </div>
          <div className='flex flex-col items-center justify-center w-1/2 h-full mr-10 ml-10 gap-4'>
            <p className='text-2xl font-bold'>¿Aún no estas registrado?</p>
            <p className='text-xl'>¡Ingresa tus datos e inicia el viaje con nosotros!</p>
            <button id='btnRegistrar'>Registrarse</button>
          </div>
        </div>
      </div>
  )
}

export default App
