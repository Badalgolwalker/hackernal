import React, { useEffect, useState } from 'react'
import Login from './page/login'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './page/home'


const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
const token = JSON.parse(localStorage.getItem('token'));
  if(token){
setIsAuth(true)
console.log(isAuth)
  }
  }, [])
  return (
    <div>
    <Routes>
    <Route path='/' element={isAuth ? <Home /> : <Navigate to="/login" />} />

       <Route path='/login' element={<Login />}/>
     
    </Routes>
    </div>
  )
}

export default App