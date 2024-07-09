
/*Puedo crear funciones con contenido html para renderizar*/
// export default function Guitar(props) {
export default function Guitar({guitar, addToCart}) {
    /*lo que paso como props es un objeto, 
    por lo cual puedo usar destructuring desde el parametro*/


    /*Como se paso un objeto, ahora puedo usarlo como guitar.propiedad
    O aplicar destructuring*/ 
    const {id, name, price, image, description} =guitar
    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid"  src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                
                <button type="button" className="btn btn-dark w-100" onClick={() => addToCart(guitar)}>                

                {/* Cuando envio argumentos se ejecuta todo al mismo tiempo
                por lo cual debemos usar un callback (arrowFunction) de 
                esta forma no se llama en automatico sino que espera al evento */}
                {/* <button type="button" className="btn btn-dark w-100" onClick={() => setCart(prevCart => [...prevCart, guitar])}> */}
                
                {/* <button type="button" className="btn btn-dark w-100" onClick={() => handleClick(guitar)}> */}
                    Agregar al Carrito</button>
            </div>
        </div>
    )
}