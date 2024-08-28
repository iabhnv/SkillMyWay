import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'
import PathCard from './components/card/PathCard'
import AchieversCard from './components/card/AchieversCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-50'>
      <Navbar/>
      <Banner/>
      <PathCard/>
      <AchieversCard/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
