import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './layout.jsx'
import { AboutPage } from './pages/about/index.jsx'
import { HomePage } from './pages/home/index.jsx'
import { Clean } from './pages/about/Clean.jsx'
import { Wash } from './pages/about/Wash.jsx'
import { Hygienic } from './pages/about/Hygienic.jsx'
import { ProductsPage } from './pages/products/index.jsx'
import ContactForm from './pages/contact/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/clean" element={<Clean />} />
          <Route path="/about/wash" element={<Wash />} />
          <Route path="/about/hygienic" element={<Hygienic />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
)