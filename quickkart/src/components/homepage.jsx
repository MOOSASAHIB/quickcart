import React from 'react';
import ProductList from './productlist';
import { useCart } from '../context/Cartcontext';

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart();
  const normalizedTerm = searchTerm ? searchTerm.trim().toLowerCase() : '';
  const filteredProducts = normalizedTerm
    ? products.filter((product) => {
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        const category = product.category.toLowerCase();

        return (
          name.includes(normalizedTerm) ||
          description.includes(normalizedTerm) ||
          category.includes(normalizedTerm)
        );
      })
    : products;

  return (
    <div className="home-page">
      {normalizedTerm && (
        <p className="search-results">
          Showing {filteredProducts.length} result
          {filteredProducts.length === 1 ? '' : 's'} for "{searchTerm.trim()}"
        </p>
      )}

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      ) : (
        <p className="no-results">No products found</p>
      )}
    </div>
  );
}

export default HomePage;