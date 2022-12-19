// import logo from './logo.svg';
// import Header from "./components/Header"
import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Baju', price: 500000 },
    { id: 2, title: 'Celana', price: 400000 },
    { id: 3, title: 'Jacket', price: 1000000 }
  ])

  const [name, setName] = useState('Fikri')

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId)
    setProducts(newProducts)
  }

  useEffect(() => {
    console.log('Use Effect Running')
  }, [name])

  return (
    <div>
      <ProductList products={products} deleteProduct={deleteProduct} />
      <button onClick={() => setName('John')}>Change Name</button>
      <p>Name: {name}</p>
    </div>
  );
}

export default App;
