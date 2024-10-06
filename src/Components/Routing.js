import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Varieties from '../Pages/Varieties'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import TermsAndConditions from '../Pages/TermsAndConditions'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import ReturnAndExchange from '../Pages/ReturnAndExchange'

const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/varieties" element={<Varieties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/returnandexchange" element={<ReturnAndExchange />} />
        </Routes>
    </div>
  )
}

export default Routing