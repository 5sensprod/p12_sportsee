import React from 'react'
import { Routes, Route } from 'react-router-dom'
import User from '../components/User'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
