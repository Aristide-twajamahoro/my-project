import React, { useState } from 'react'
import '../component/style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function SinUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:3400/signup', { name, email, password})

      .then(res => {
        console.log(res.data)
        alert(res.data.message)
        navigate('/')

      })
      .catch(err => console.log(err)
      )
  }


  return (
    <div> <br /><br />
      <center><div className="form-container">
        <h2>Signup Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="role">Password</label>
            <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div></center>

    </div>
  )
}

export default SinUp