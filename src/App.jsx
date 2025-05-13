import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Cryptos from './components/cryptos'
import Faq from './components/faq'
import Footer from './components/footer'
import Testimonials from './components/testimonials'
import Howitworks from './components/howitworks'
import WhyCryptix from './components/whycryptix'
import Home from './components/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <WhyCryptix />
      <Cryptos />
      <Howitworks />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  )
}

export default App
