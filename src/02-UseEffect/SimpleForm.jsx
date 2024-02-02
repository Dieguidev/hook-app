import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'diego',
    email: 'diego@probando.com'
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value   //propiedad computada de javascript, le dice quien debe cambiar en el objeto
    })
  }

  useEffect(() => {

  }, []);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={onInputChange}
      />


      <input
        type="email"
        className="form-control mt-2"
        placeholder="diego@prueba.com"
        name="email"
        value={onInputChange}
      />
      {
        (username === 'diego') && <Message />
      }
    </>
  )
}
