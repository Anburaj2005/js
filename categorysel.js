import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductCard({ product }) {
  return (
    <div className="card">
      <h2>{product.name}</h2>
     <img src={product.image} alt={product.image} width={100}/>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch product data
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });

    // Fetch category data
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategories(response.data);
        console.log(categories)
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleChangeCategory}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category}</option>
        ))}
      </select>
      <div className="product-list">
        {products.filter(product => !selectedCategory || product.category === selectedCategory).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;


