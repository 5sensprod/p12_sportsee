import React from 'react'
import { Routes, Route } from 'react-router-dom'
import User from '../pages/User'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

/**
 * Le composant AppRouter définit les routes de l'application.
 *
 * @returns {JSX.Element} Les routes de l'application.
 */

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
