
import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import CreateEventPage from './pages/CreateEventPage.jsx'
import EventDetailsPage from './pages/EventDetailsPage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/signin' element={<SignInPage />}/>
        <Route path='/create-event' element={<CreateEventPage />}/>
        <Route path='/event' element={<EventDetailsPage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
