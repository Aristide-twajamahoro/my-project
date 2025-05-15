import React from 'react'
import {Link} from 'react-router-dom'

function AdminNav() {
  return (
    <div>
        <div className='adminnav'>
            <b>E-commerce Admin Pannel</b>
            <button className='admin-nav-btn'><Link to='/'>Logout</Link></button>
            <button className='admin-nav-btn'><Link to='/viewproduc'>View Products</Link></button>
            <button className='admin-nav-btn'><Link to='/addproduct'>Add Product</Link></button>
            </div>
    </div>
  )
}

export default AdminNav