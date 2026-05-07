import "../styles/CartSidebar.css";

const fallbackImage =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23f0f0f0'/><text x='300' y='200' text-anchor='middle' dominant-baseline='middle' font-family='Segoe UI,Arial' font-size='24' fill='%23999'>Image unavailable</text></svg>";

const handleImageError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

function CartSidebar({ cart, onUpdateQuantity, onRemoveItem }) {

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="cart-summary">

      <div className="cart-header">
        <div>
          <h2>Cart Summary</h2>
          <p className="cart-subtitle">{totalItems} items</p>
        </div>
      </div>

      <div className="cart-items">

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (

          cart.map(item => (

            <div key={item.id} className="cart-item">

              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
                onError={handleImageError}
              />

              <div className="cart-item-details">
                <div className="cart-item-header">
                  <h4>{item.name}</h4>
                  <button
                    className="remove-btn"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <div className="cart-item-meta">
                  <span className="cart-item-price">
                    ${item.price.toFixed(2)}
                  </span>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <span className="cart-item-total">
                  Line total: ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>

            </div>

          ))

        )}

      </div>

      {cart.length > 0 && (

        <div className="cart-footer">

          <div className="cart-total">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>

        </div>

      )}

    </div>
  );
}

export default CartSidebar;