import React from 'react'
import { useNavigate } from 'react-router-dom'


const logout = () => {

  const navigate = useNavigate()
  const logout = () =>{
    localStorage.removeItem("token")
navigate("/login")
  }
  return (
    <div>
      <button className='p-1 border-2 m-3 border-slate-500 rounded-md bg-blue-400' onClick={logout}>logout</button>
    </div>
  )
}

export default logout