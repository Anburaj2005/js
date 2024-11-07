import React, { useState } from 'react';
import Select from 'react-select';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A' },
    { id: 2, name: 'Product 2', category: 'Category B' },
    { id: 3, name: 'Product 3', category: 'Category A' },
    // Add more products here
  ]);

  // Function to handle category change
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory.value)
    : products;

  // Options for category select
  const categoryOptions = [
    { value: 'Category A', label: 'Category A' },
    { value: 'Category B', label: 'Category B' },
    // Add more categories here
  ];

  return (
    <div>
      <h1>Product List</h1>
      <Select
        value={selectedCategory}
        onChange={handleCategoryChange}
        options={categoryOptions}
        placeholder="Select Category"
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
