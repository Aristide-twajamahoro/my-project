import React, { useState } from 'react'
import '../component/style.css'
import axios from 'axios'
import AdminNav from '../pages/AdminNav'

function AddProduct() {
   const [name,setName] = useState('')
   const [price,setPrice] = useState('')
   const [category,setCategory] = useState('')
   const [quantity,setQuantity] = useState('')
   const [description,setDescription] = useState('')
   const [image,setImage] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3400/addproduct', { name, price, category, quantity, description, image })

            .then(res => {
                console.log(res.data)
                alert(res.data.message)

            })
            .catch(err => console.log(err)
            )
    }

    return (
        <div>
            <AdminNav />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
             <br /><br />
            <center> <div class="form-container-addproduct">
                <h2>Product Form</h2>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="name">Product Name</label>
                        <input type="text" id="name" name="name" required 
                        onChange={(e) =>setName(e.target.value)} />
                    </div>


                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" id="price" name="price" step="0.01" required 
                        onChange={(e) =>setPrice(e.target.value)}/>
                    </div>


                    <div class="form-group">
                        <label for="category">Category</label>
                        <select id="category" name="category" required 
                        onChange={(e) =>setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="home">Home & Kitchen</option>
                            <option value="books">Books</option>
                            <option value="toys">Toys</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1" required 
                        onChange={(e) =>setQuantity(e.target.value)}/>
                    </div>

                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea id="description" name="description" required
                        onChange={(e) =>setDescription(e.target.value)}></textarea>
                    </div>

                    <div class="form-group">
                        <label for="image">Product Image</label>
                        <input type="file" id="image" name="image" accept="image/*" required 
                        onChange={(e) =>setImage(e.target.value)}/>
                    </div>


                    <div class="form-group">
                        <button type="submit" class="btn-submit">Submit</button>
                    </div>

                </form>

            </div></center>
        </div>
    )
}

export default AddProduct