import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/pages/Home.jsx';
import AboutMe from './Components/pages/AboutMe.jsx';
import Portfolio from './Components/pages/Portfolio.jsx';
import Contact from './Components/pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/aboutMe",
        element:<AboutMe />
      }, 
      {
        path:"/portfolio",
        element:<Portfolio />
      },
      {
        path:"/contact", 
        element:<Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
