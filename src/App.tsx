import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import ScrollToAnchor from "./components/ScrollToAnchor"


export default function App() {
  

  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}