import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../component'
import Home from '../component/Home'
import Upload from '../component/Upload'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Upload" element={<Upload />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
