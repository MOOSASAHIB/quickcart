import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductList from './productlist';
import { useCart } from '../context/Cartcontext';

function SearchPage({ products }) {
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const rawQuery = searchParams.get('query') || '';
  const normalizedQuery = rawQuery.trim().toLowerCase();

  const filteredProducts = normalizedQuery
    ? products.filter((product) => {
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        const category = product.category.toLowerCase();

        return (
          name.includes(normalizedQuery) ||
          description.includes(normalizedQuery) ||
          category.includes(normalizedQuery)
        );
      })
    : [];

  return (
    <div className="search-page">
      {normalizedQuery ? (
        <>
          <p className="search-results">
            Showing {filteredProducts.length} result
            {filteredProducts.length === 1 ? '' : 's'} for "{rawQuery.trim()}"
          </p>

          {filteredProducts.length > 0 ? (
            <ProductList
              products={filteredProducts}
              onAddToCart={addToCart}
              title="Search results"
            />
          ) : (
            <p className="no-results">No products found.</p>
          )}
        </>
      ) : (
        <div className="empty-search">
          <p>Enter a search term to see results.</p>
          <Link to="/" className="back-home-link">
            ← Back to all products.
          </Link>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
