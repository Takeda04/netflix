import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Home from './pages/Home'
function App() {
  let token = localStorage.getItem('accessToken');

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
