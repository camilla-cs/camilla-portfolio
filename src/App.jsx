import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Background from './components/Background'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Background/>
      <Navbar/>
      <Introduction/>
      <Projects/>
      <Contact/>
     
      <Footer/>
    </>
  )
}

export default App
