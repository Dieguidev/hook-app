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

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  )
}
