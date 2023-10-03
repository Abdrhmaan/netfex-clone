import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import List from './pages/List'
import Broqser from './pages/Broqser'


function App() {


  return (
    <>
   

   <Routes>
 

    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/list' element={<List/>}/>
    <Route path='/browser' element={<Broqser/>}/>

  
   </Routes>
        
    </>
  )
}

export default App
