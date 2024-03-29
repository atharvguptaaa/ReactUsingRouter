import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


import { Home, Layout, } from './Components' // githubInfoLoader
import {About }  from './Components'
import {Contact} from './Components'
import {User} from './Components'
import {GitHub} from './Components'





// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Layout />,
//     children:[
//       {
//         path: "Home",
//         element: <Home/>
//       },
//       {
//         path: "About",
//         element: <About/>

//       },
//       {
//         path: "Contact",
//         element:<Contact/>

//       }
//     ]
//   }

// ])



const router= createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout />} >
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={< User/>} />
        <Route path="github" element={<GitHub/>}
   //     loader={githubInfoLoader}
       
        
        />
        </Route>
      )
   
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
