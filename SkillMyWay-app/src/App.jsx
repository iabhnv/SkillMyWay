import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-50'>
      <Navbar/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
