import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing-page'
import Home from './pages/home-page'

export function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route></Route>
        <Route></Route>
    </Routes>
    </BrowserRouter>
  )
}

