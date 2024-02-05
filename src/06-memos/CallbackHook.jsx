import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  //el useCallback sirve para memorizar funciones, es decir, cuando se llame a la misma función se va a guardar en memoria y cuando se llame a otra función se va a ejecutar la misma función guardada en memoria.
  const incrementFather = useCallback(
    () => {
      setCounter( (value) => value + 1 );
    },
    [],
  )


  // const incrementFather = () => {
  //   setCounter( counter + 1 );
  // }

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  )
}
