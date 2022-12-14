import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App