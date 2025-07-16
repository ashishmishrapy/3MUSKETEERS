import { Route, Routes } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import Landing from './components/Landing'
import MusicPage from './components/MusicPage'
import Navbar from './components/Navbar'

const App = () => {

  
  
  return (
    <>
    <div className='h-full w-full bg-black relative'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/music' element={<MusicPage />} />
      </Routes>
    </div>
    </>
  )
}

export default App