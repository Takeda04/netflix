import {Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Home from './pages/Home'
import { useEffect } from 'react'
import SinglePage from './pages/SinglePage'

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (token) {
      return 
    } else {
      navigate("/");
    }
  }, [token]);

  return (
     <>
      <Routes >
         <Route path='/' element={<Login/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/singlepage' element={<SinglePage/>}/>
      </Routes>
    </>
  )
}

export default App
