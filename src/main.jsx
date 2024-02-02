import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterApp } from './01-UseState/CounterApp'
// import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
// import { SimpleForm } from './02-UseEffect/SimpleForm'
import { FormWithCustomHook } from './02-UseEffect/FormWithCustomHook'
// import { HooksApp } from './HooksApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormWithCustomHook/>
  </React.StrictMode>,
)
