import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        getProductById()
    })

    const getProductById = async () => {
        const response = await fetch(`http://localhost:8080/products/${id}`)
        const data = await response.json()
        setTitle(data.title)
        setPrice(data.price)
    }

    const updateProduct = async (e) => {
        e.preventDefault()
        const product = { title, price }
        await fetch(`http://localhost:8080/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={updateProduct}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title"></input>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price"></input>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button className="button is-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProduct