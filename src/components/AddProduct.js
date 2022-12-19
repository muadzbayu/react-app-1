import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const navigate = useNavigate()

    // useEffect(() => {
    //     saveProduct()
    // }, [])

    const saveProduct = async (e) => {
        e.preventDefault()
        const product = { title, price }
        console.log(product)
        await fetch('http://localhost:8080/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={saveProduct}>
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

export default AddProduct