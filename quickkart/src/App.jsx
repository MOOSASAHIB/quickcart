import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header';
import HomePage from './components/homepage';
import CategoryPage from './components/CategoryPage';
import SearchPage from './components/searchpage';
import CartPage from './components/cartpage';
import CartSidebar from './components/cartsidebar';
import { products } from './data/product';
import './styles/app.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categories={categories}
        />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div className="shopping-layout">
                  <section className="product-area">
                    <HomePage products={products} searchTerm={searchTerm} />
                  </section>
                  <aside className="cart-area">
                    <CartSidebar />
                  </aside>
                </div>
              }
            />

            <Route
              path="/category/:category"
              element={
                <div className="shopping-layout">
                  <section className="product-area">
                    <CategoryPage products={products} />
                  </section>
                  <aside className="cart-area">
                    <CartSidebar />
                  </aside>
                </div>
              }
            />

            <Route
              path="/search"
              element={
                <div className="shopping-layout">
                  <section className="product-area">
                    <SearchPage products={products} />
                  </section>
                  <aside className="cart-area">
                    <CartSidebar />
                  </aside>
                </div>
              }
            />

            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
