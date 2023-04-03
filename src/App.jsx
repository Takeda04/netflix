import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login/Login'
import Home from './pages/Home'
function App() {
  let token = localStorage.getItem('accessToken');

  return (
    <BrowserRouter>
      
      <Routes >
        if(token){
          <Route path='/home' element={<Home/>}/>
        }else{
          <Route path='/' element={<Login/>}/>
        }
        
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
