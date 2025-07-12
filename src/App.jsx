
import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import CreateEventPage from './pages/CreateEventPage.jsx'
import EventDetailsPage from './pages/EventDetailsPage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProtectedRoot from './components/ProtectedRoot.jsx'
import { useState } from 'react'

function App() {
  const [isRegistered, setisRegistered] = useState(JSON.parse(localStorage.getItem("token"))!=null ? true:false)
  console.log(JSON.parse(localStorage.getItem("token")))
  
  // const token = localStorage.setItem(token, JSON.stringify(""))
  // const token = ""
  // const token = 
  
  // if(token.length > 0){
  //   setisRegistered(true)
  // }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/signin' element={<SignInPage isRegistered={isRegistered} setisRegistered={setisRegistered}/>}/>
        <Route path='/create-event' element={<ProtectedRoot setisRegistered={setisRegistered} isRegistered={isRegistered}/>}>
           <Route index  element={<CreateEventPage />}/>
        </Route> 
        <Route path='/event' element={<EventDetailsPage />}/>
        <Route path='*' element={<p>Error</p>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
