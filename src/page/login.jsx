import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submithandler = async(e) =>{
    e.preventDefault()
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email: email,
        password: password
      });
      if(!response){
        alert("bad request")
      }
      
      const {data} = response
      if(data.token){
        localStorage.setItem("token",JSON.stringify(data.token))
        navigate("/")
      }
      else{
        alert("login failed")
      }

      setEmail("")
      setPassword("")
    } catch (error) {
      console.error("There was an error!", error);
    }
}
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
<form onSubmit={submithandler}>
  <div className="join">
  <input className='p-1 border-2 m-3 border-slate-500 rounded-md' type="text" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='email'/>
  <input className='p-1 border-2 m-3 border-slate-500 rounded-md' type="text" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='password' />
  <input className='p-1 border-2 m-3 border-slate-500 rounded-md bg-blue-400'  type="submit" value="login"  />
</div>
</form>
      
    </div>
  )
}

export default login