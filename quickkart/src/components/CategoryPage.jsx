import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductList from './productlist';
import { useCart } from '../context/Cartcontext';

function CategoryPage({ products }) {
  const { addToCart } = useCart();
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category || '');
  const normalizedCategory = decodedCategory.toLowerCase();

  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === normalizedCategory
  );

  return (
    <div className="category-page">
      <h2 className="category-title">{decodedCategory} Products</h2>

      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p>😕 No products found in this category</p>
          <Link to="/" className="back-home-link">
            ← Back to all products
          </Link>
        </div>
      ) : (
        <ProductList
          products={filteredProducts}
          onAddToCart={addToCart}
          title={null}
        />
      )}
    </div>
  );
}

export default CategoryPage;
