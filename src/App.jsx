import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cardshome from './components/Cardshome'
import Headlinecard from './components/Headlinecard'
import Categories from './components/Categories'
import Variety from './components/Variety'
import Footer from './components/Footer'


function App({img,info,address}) {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Headlinecard></Headlinecard>
      <Categories></Categories>
      <Variety></Variety>
      <Footer></Footer>
      
    
    </div>
    </>
  )
}

export default App
