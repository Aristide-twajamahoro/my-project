import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function UpdateProduct() {
    const [name, setPname] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3400/selectupdate/${id}`)
            .then(res => {
                setPname(res.data.result.name)
                setPrice(res.data.result.price)
                setCategory(res.data.result.category)
                setQuantity(res.data.result.quantity)
                setDescription(res.data.result.description)
                console.log(res.data.result)
            })
            .catch(err =>console.log(err))
    }, [id])

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`http://localhost:3400/updateproduc/${id}`, { name, price, category, quantity, description })
            .then(res => {
                if (res.data.valid) {
                     console.log(res.data.result)
                    alert(res.data.message)
                    navigate('/viewproduc')
                } else {
                    alert(res.data.error)
                }
               

            })
            .catch(err => console.log(err)
            )
    }
    return (
        <div>
            <br /><br />
            <center> <div className="form-container">
                <h2>Product Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product Name</label>
                        <input type="text" name="name" required
                            value={name} onChange={(e) => setPname(e.target.value)} />
                    </div>


                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" step="0.01" required
                            value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>


                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select name="category" required
                            value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home & Kitchen</option>
                            <option value="books">Books</option>
                            <option value="toys">Toys</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="quantity" min="1" required
                            value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" required
                            value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-submit">Submit</button>
                    </div>

                </form>

            </div></center>
        </div>
    )
}

export default UpdateProduct