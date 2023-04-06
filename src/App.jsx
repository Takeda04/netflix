import {Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Home from './pages/Home'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [navigate, token]);

  return (
     <>
      <Routes >
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
