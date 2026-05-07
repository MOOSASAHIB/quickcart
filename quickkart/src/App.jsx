import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import { products } from './data/product';
import './styles/App.css';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {

    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCartClick = () => {
    const cartSection = document.getElementById('cart-summary');

    if (cartSection) {
      cartSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app">

      <Header
        cartItemCount={getTotalItems()}
        onCartClick={handleCartClick}
      />

      <main className="main-content">
        <div className="shopping-layout">
          <section className="product-area">
            <ProductList
              products={products}
              onAddToCart={addToCart}
            />
          </section>

          <aside className="cart-area" id="cart-summary">
            <CartSidebar
              cart={cart}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
            />
          </aside>
        </div>
      </main>

    </div>
  );
}

export default App;