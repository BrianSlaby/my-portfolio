import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import ScrollToAnchor from "./components/ScrollToAnchor"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import ShoppingHelper from "./pages/ShoppingHelper"
import ThirteenthAge from "./pages/ThirteenthAge"
import Quizzical from "./pages/Quizzical"


export default function App() {
  

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToAnchor />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-helper" element={<ShoppingHelper />} />
          <Route path="/13a-monster-tracker" element={<ThirteenthAge />} />
          <Route path="/quizzical" element={<Quizzical />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}