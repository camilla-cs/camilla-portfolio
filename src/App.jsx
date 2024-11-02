import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Introduction/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
