import React, { useState } from 'react';
import axios from 'axios';
import '../component/style.css';
import {useNavigate} from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3400/login', {
        username,
        password,
      });

      const data = res.data;
      alert(data.message);
      setMessage(data.message);

      if (data.success) {
        if (data.role === 'admin') {
          console.log('Admin logged in');
          // e.g. navigate to admin dashboard
      navigate('/adminnav')

        } else if (data.role === 'customer') {
          console.log('User logged in');
          // e.g. navigate to user dashboard
      navigate('/nav')

        }
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <div className="form-container-login">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        {message && <p style={{ marginTop: '10px', color:'red', fontSize:'16px' }}>{message}</p>}
      </div>
    </div>
  );
}

export default Login;
