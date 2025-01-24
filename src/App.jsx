import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Budget from './pages/Budget'
import Statistics from './pages/Statistics'
import LandingPage from './pages/LandingPage'
import Layout from './ui_components/Layout'
import Practice from './ui_components/Practice'
import { Toaster } from "@/components/ui/toaster"



const App = () => {
  return (
    // <div>
    // <Toaster />
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
      <Toaster />
    </div>

  )
}

export default App