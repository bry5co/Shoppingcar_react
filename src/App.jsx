//Importar mi componente creado
import Guitar from "./Components/Guitar"
import Header from "./Components/Header"
import {useState, useEffect} from 'react'
import { db } from "./data/db";


function App() {
  //state
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  
  /*Si fuera una consulta de una Api*/
  useEffect(() => {
    setData(db)
  }, []);

  function addToCart(item){
    const itemExist= cart.findIndex((guitar) => guitar.id === item.id)
    if (itemExist >= 0){
      console.log("El elemento existe")
    }else{
      //setCart ya sabe el estado de cart por eso lo uso
      setCart(prevCart => [...prevCart, item])
      console.log(itemExist)
      console.log(cart)
    }
  }


  return (
    //Aqui pego todo lo del html menos con la etiqueta html y body
    <>
      {/* Renderizar componente de header */}
      <Header/>
      {/* Fin Renderizar componente de header */}
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar)=> (
            /*Uso de props para renderizar*/
            <Guitar
              /*Key prop especial que debo usar cuando se 
              itere sobre una lista*/
              key={guitar.id}
              guitar={guitar}
              //Puedo pasarle tambien la funcion del setState
              // setCart={setCart}
              addToCart={addToCart}
            />
          ))}
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
