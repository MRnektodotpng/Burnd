import { useState } from 'react'
import loopGif from './assets/fyEP_light.gif'
import Header from './components/Header'
import Main from './components/Main.jsx'
import Blog from './components/Blog.jsx'
import Footer from './components/Footer.jsx'
import Prikol from './components/Prikol.jsx'
import './styles/App.scss';
function App() {
  

  return (
    <>
  
        
       <Header></Header>
       <Prikol isTriangleExist={true}></Prikol>
       <Main></Main>
       <Prikol isTriangleExist={false}></Prikol>
       <Blog></Blog>
       <Footer></Footer>


    
    </>
  )
}

export default App

