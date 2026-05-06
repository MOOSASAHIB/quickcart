import "../styles/CartSidebar.css";

const fallbackImage =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23f0f0f0'/><text x='300' y='200' text-anchor='middle' dominant-baseline='middle' font-family='Segoe UI,Arial' font-size='24' fill='%23999'>Image unavailable</text></svg>";

const handleImageError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>

      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={onClose} className="close-btn">✕</button>
      </div>

      <div className="cart-items">

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
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
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>

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

              <button
                className="remove-btn"
                onClick={() => onRemoveItem(item.id)}
              >
                ✕
              </button>

            </div>

          ))

        )}

      </div>

      {cart.length > 0 && (

        <div className="cart-footer">

          <div className="cart-total">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>

        </div>

      )}

    </div>
  );
}

export default CartSidebar;