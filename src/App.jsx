import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Game from './pages/Game1.jsx'
export default function App(){return (
<Router>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/game/:id' element={<Game />} />
  </Routes>
</Router>)}
