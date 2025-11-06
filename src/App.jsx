import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { notification } from 'antd'
import HomeComponents from './Components/HomeComponents/HomeComponents'
import Navbar from './Components/Navigation/Navbar'
import OurStory from './Components/OurStory/OurStory'
import { useGlobalAnimation } from './utils/useGlobalAnimation'
import About from './Components/AboutUs/About'
import NewsLetters from './Components/NewsLetter/NewsLetters'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services'
import SingleService from './Components/Services/SingleService'
import Modal from './Components/Modal/Modal'
import Directors from './Components/Directors/Directors'
import OnlineDesk from './Components/OnlineDesk/OnlineDesk'
import CompliancesAndForms from './Components/HomeComponents/CompliancesAndForms/CompliancesAndForms'
function App() {
  const [count, setCount] = useState(0)

  // Initialize global animations
  useGlobalAnimation()

  // Configure Ant Design notification
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      {contextHolder}
      <Modal />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeComponents />} />
          <Route path='/our-story' element={<OurStory />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:serviceName' element={<SingleService />} />
          <Route path='/directors' element={<Directors />} />
          <Route path='/online-desk' element={<OnlineDesk />} />
          <Route path='/compliances-and-forms' element={<CompliancesAndForms />} />
        </Routes>
        
        <NewsLetters />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
