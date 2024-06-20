//Importar mi componente creado
import Guitar from "./Components/Guitar"
import Header from "./Components/Header"
import {useState} from 'react'

function App() {
  //state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  return (
    //Aqui pego todo lo del html menos con la etiqueta html y body
    <>
      {/* Renderizar componente de header */}
      <Header/>
      {/* Fin Renderizar componente de header */}
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          <Guitar/>
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

export default App
