import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterApp } from './01-UseState/CounterApp'
// import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
// import { SimpleForm } from './02-UseEffect/SimpleForm'
// import { FormWithCustomHook } from './02-UseEffect/FormWithCustomHook'
// import { MultipleCustmHooks } from './03-examples/MultipleCustmHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
// import { HooksApp } from './HooksApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>,
)
