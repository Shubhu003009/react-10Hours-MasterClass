import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CoderDostReact from './Pages/CoderDostReact.jsx'


let routes = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/coderDostReact',
    element:<CoderDostReact/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
)
