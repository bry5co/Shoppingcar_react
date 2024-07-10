//Importar mi componente creado
import Guitar from "./Components/Guitar"
import Header from "./Components/Header"
import {useState, useEffect} from 'react'
import { db } from "./data/db";


function App() {
  //state
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);
  
  /*Si fuera una consulta de una Api*/
  // useEffect(() => {
  //   setData(db)
  // }, []);

  function addToCart(item){
    const itemExist= cart.findIndex((guitar) => guitar.id === item.id);
    if (itemExist >= 0){
      const updateCart=[...cart];
      updateCart[itemExist].quantity++;
      setCart(updateCart);
    }else{
      //Agrego nuevo atributo, cantidad de atributos que quiero colocar
      item.quantity = 1
      //setCart ya sabe el estado de cart por eso lo uso
      setCart([...cart, item])
      console.log(cart)
    }
  }

  function removeElementFromCart(id){
    /* Mi codiguito :(
    const itemExist=cart.findIndex((guitar) => guitar.id === item.id);
    if(itemExist >= 0){
      const updateCart=[...cart];
      updateCart.splice(itemExist, 1);
      setCart(updateCart);
    }*/
    setCart(prevCart => prevCart.filter((guitar) => guitar.id !== id))
  }

  return (
    //Aqui pego todo lo del html menos con la etiqueta html y body
    <>
      {/* Renderizar componente de header */}
      <Header
        cart={cart}
        removeElementFromCart={removeElementFromCart}
      />
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
