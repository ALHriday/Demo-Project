import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx';
import About from './components/about/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
