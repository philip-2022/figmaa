import React from 'react'
import {BrowserRouter, Routes, Route}from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import HelpCenter from './pages/HelpCenter'




function App() {
  return (

    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path='/signin' element={<Signin />}/>
     <Route path='/signup' element={<Signup />}/>
     <Route path='/HelpCenter' element={<HelpCenter />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App