import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './components/User'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
