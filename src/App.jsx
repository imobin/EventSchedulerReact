
import { Route, Routes } from 'react-router'
import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<p>Home</p>}/>
        <Route path='/about' element={<p>about</p>}/>
      </Routes>
    </>
  )
}

export default App
