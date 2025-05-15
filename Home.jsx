import React from 'react'
import { Link } from 'react-router-dom'
import '../component/style.css'
import Login from './Login'

function Home() {
  return (
    <div>
      <span>
      <button className='ecommerce'>E-Commerce</button>
      </span>
      <span>
        <button className='log-in' ><Link>Log-In</Link></button>
        <button className='sign-up'><Link to='/signup'>Sign-Up</Link></button>

      </span>
     <h1>
      Welcome to our home page <br /> of our E-comerce 
      platform. on this website customer <br />
      can buy any product and get it simply <br />
      but to do anything you must have an Account...... <br /><br /> <br />
     <center><Login /></center> 
      </h1>
    </div>
  )
}

export default Home