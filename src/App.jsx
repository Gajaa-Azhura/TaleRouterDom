import Navbar from '../src/components/Navbar'
import Aboutus from './pages/Aboutus'
import Faq from './pages/Faq'
import Home from './pages/Home'
import Contactus from './pages/Contactus'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUS" element={<Aboutus/>}/>
        <Route path="/FAQ" element={<Faq/>}/>
        <Route path="/ContactUs" element={<Contactus/>}/>
      </Routes>
    </>
  )
}

export default App
