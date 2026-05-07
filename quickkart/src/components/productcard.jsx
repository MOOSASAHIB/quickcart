import "../styles/productcard.css";

const fallbackImage =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23f0f0f0'/><text x='300' y='200' text-anchor='middle' dominant-baseline='middle' font-family='Segoe UI,Arial' font-size='24' fill='%23999'>Image unavailable</text></svg>";

const handleImageError = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

function ProductCard({ product, onAddToCart }) {

  return (
    <div className="product-card">

      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onError={handleImageError}
        />
      </div>

      <div className="product-info">

        <h3 className="product-name">{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <span className="product-category">{product.category}</span>
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;