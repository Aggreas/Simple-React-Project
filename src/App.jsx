import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <>
      <ProductForm addProduct={handleAddProduct} />
      <ProductList products={products} />
    </>
  );
}

export default App;