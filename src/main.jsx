import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { GithubInfoLoader } from './Components/Github/Github.jsx'
import Login from './Components/Login.jsx'
import ProtectedRoute from './Components/ProtectedRoute.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:'/',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
       <Route path="" element={<ProtectedRoute Component={Home} />}/>
       <Route path="/about" element={<ProtectedRoute Component={About} />}/>
       <Route path="/contact" element={<ProtectedRoute Component={Contact} />}/>
       <Route path="/user/:userid" element={<ProtectedRoute Component={User} />}/>
       <Route path="/login" element={<Login />}/>
       <Route
       loader={GithubInfoLoader} 
       path="/github" 
       element={<Github />}
       />

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
