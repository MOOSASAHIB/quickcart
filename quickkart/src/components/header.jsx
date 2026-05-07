import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/Cartcontext';
import '../styles/header.css';

function Header({ searchTerm, onSearchChange, categories }) {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const safeCategories = Array.isArray(categories) ? categories : [];

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const trimmed = (searchTerm || '').trim();
    if (trimmed) {
      navigate(`/search?query=${encodeURIComponent(trimmed)}`);
      return;
    }
    navigate('/');
  };

  const handleSearchChange = (event) => {
    if (onSearchChange) {
      onSearchChange(event.target.value);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <Link to="/" className="header-logo">
            <h1 className="header-title">🛒 QuickCart</h1>
          </Link>

          <Link to="/cart" className="cart-icon-btn" aria-label="View cart">
            🛒
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Link>
        </div>

        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          {safeCategories.map((category) => (
            <Link
              key={category}
              to={`/category/${encodeURIComponent(category)}`}
              className="nav-link"
            >
              {category}
            </Link>
          ))}
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>

        <form className="search-container" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm || ''}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;