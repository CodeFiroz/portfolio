import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/Works'
import Footer from './Components/Footer'
import Cursor from './Components/Cursor'

const App = () => {
  return (
    <div>
      <Cursor />
      <Header />
      <Hero />
      <Works />
      <Footer />
    </div>
  )
}

export default App