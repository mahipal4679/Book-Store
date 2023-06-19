import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [error,setError] = React.useState(false);

    const addProduct = async () => {

        if(!name || !price || !author)
        {
            setError(true);
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, author, userId }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)

    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter Book name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            {error && !name && <span className='invalid-input'>Enter valid name</span>}

            <input type="text" placeholder='Enter Book price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}

            <input type="text" placeholder='Enter Book author' className='inputBox'
                value={author} onChange={(e) => { setAuthor(e.target.value) }}
            />
            {error && !author && <span className='invalid-input'>Enter valid author</span>} 
            <button onClick={addProduct} className='appButton'>Add Book</button>
        </div>
    )
}

export default AddProduct;