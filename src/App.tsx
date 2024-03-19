import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  

  return (
    <BrowserRouter>
      {// Need to refactor with layout route after I review that
      }
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {
        // Need to refactor with layout route after I review that
      }
      <Footer />
    </BrowserRouter>
  )
}