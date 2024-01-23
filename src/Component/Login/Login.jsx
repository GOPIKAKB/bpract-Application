import React, { useContext, useState } from 'react'
import './Login.css'
import { newContext } from '../../App'
import axios from 'axios'
import { baseUrl } from '../../API/Api'
///api/auth/login

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { token, setTocken } = useContext(newContext)

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
  
      const response = await axios.post(`${baseUrl}/api/auth/login`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='login-container'>
      <div className='login'>
        <div>
          <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Username'></input>
        </div>
        <div>
          <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Password'></input>
        </div>
        <div className='button'>
          <button onClick={handleLogin}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login
