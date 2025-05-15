import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNav from '../pages/AdminNav'


function Selectprt() {
    const [data, setData] = useState([])

    function handleSelect() {
        axios.get('http://localhost:3400/viewproduct')
            .then(res =>
                setData(res.data)
            )
            .catch(err =>
                console.log(err)

            )

    }
    useEffect(() => {
        handleSelect()
    }, [])

    //delete product.....

    function deleteProduct(id) {
        axios.get(`http://localhost:3400/deleteproduct/${id}`)
        .then(res => {
            console.log(res.data)
            alert(res.data.message),location.replace('/viewproduc')
            
        })
        .catch(err =>
            console.log(err)
            
        )
    }

    return (


        <div>
            < AdminNav />
            <center><br /><br />
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>category</th>
                        <th>quantity</th>
                        <th>description</th>
                        <th colSpan='2'>Action</th>

                    </tr>
                </thead>

                <tbody>
                    {data.map((datas, index) => (
                        <tr key={index}>
                            <td>{datas.name}</td>
                            <td>{datas.price}</td>
                            <td>{datas.category}</td>
                            <td>{datas.quantity}</td>
                            <td>{datas.description}</td>
                            <td><button className='deleteproduct' type='submit' onClick={() =>deleteProduct(datas.id)}>Remove</button></td>
                            <td><button><Link to={`/updateproduct/${datas.id}`}>Edit Product</Link></button></td>
                        </tr>))}
                </tbody>

            </table></center>

        </div>
    )
}

export default Selectprt