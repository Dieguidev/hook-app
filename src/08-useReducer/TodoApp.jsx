import { useReducer } from "react"
import { todoReducer } from "./todoReducer"


export const TodoApp = () => {

  const initialState = [
    {
      id: new Date().getTime(),
      description: 'Derrotar a Picolo',
      done: false
    },
    {
      id: new Date().getTime() + 1,
      description: 'Derrotar a Vegeta',
      done: false
    },
  ]

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>Todo App 10, <small>pendientes: 2</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {
              todos.map(todo => (
                <li key={todo.id} className="list-group-item d-flex justify-content-between">
                  <span className="align-self-center">Item 1</span>
                  <button className="btn btn-danger">Borrar</button>
                </li>))
            }

          </ul>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="Que hay que hacer?"
              className="form-control"
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
