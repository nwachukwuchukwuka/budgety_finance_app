import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Budget from './pages/Budget'
import Statistics from './pages/Statistics'
import LandingPage from './pages/LandingPage'
import Layout from './ui_components/Layout'
import Practice from './ui_components/Practice'


const App = () => {
  return (
    // <div>
    //   <Practice />
    // </div>
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/dashboard' element={
            <Layout>
              <Dashboard />
            </Layout>

          } />

          <Route path='/home' element={
            <Layout>
              <Dashboard />
            </Layout>

          } />
          <Route path='/budget' element={
            <Layout>
              <Budget />
            </Layout>
          } />
          <Route path='/Statistics' element={<Statistics />} />

        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default App