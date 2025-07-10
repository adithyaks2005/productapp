import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/login'
import Admin from './Components/Admin'
import Main from './Components/Main'
import Products from './Components/products'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/s' element={<Signup/>}/>
         <Route path='/a' element={<Main data={<Admin/>}/>}/>
         <Route path='/p' element={<Main data={<Products/>}/>}/>

      </Routes>
    </>
  )
}

export default App
