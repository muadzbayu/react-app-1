// import logo from './logo.svg';
// import Header from "./components/Header"
import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Baju', price: 500000 },
    { id: 2, title: 'Celana', price: 400000 },
    { id: 3, title: 'Jacket', price: 1000000 }
  ])

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId)
    setProducts(newProducts)
  }

  useEffect(() => {
    console.log('Use Effect Running')
  })

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductList products={products} deleteProduct={deleteProduct} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
