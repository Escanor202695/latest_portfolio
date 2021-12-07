import React from 'react'
import { ROUTENAME } from '../constants'
import Home from '../pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTENAME.HOME} element={<Home />} />
        <Route path={ROUTENAME.NOTFOUND} element={<h1>Not Found!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
