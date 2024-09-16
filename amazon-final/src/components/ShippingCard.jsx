import { useState, useEffect } from "react";
import styles from "./ShippingCard.module.css";
import Delivery from "./Header/Delivery";
import { useBasket } from "../components/BasketContext";

const ShippingCard = ({ product, selectedProduct }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(Number(product.price));
  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  const { addToBasket } = useBasket();

  useEffect(() => {
    setTotalPrice(Number(product.price) * quantity);
  }, [quantity, product.price]);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };
  const handleAddToBasket = () => {
    if (selectedProduct) {
      addToBasket(selectedProduct, quantity);
    }
  };
  return (
    <div className={styles.productPage}>
      <h1 className={styles.productTitle}>Buy Now:</h1>

      <p className={styles.productPrice}>
        $ {totalPrice.toFixed(2)}
        <span className={styles.productOldPrice}>
          (was $ {product.oldPrice})
        </span>
      </p>

      <div className={styles.shippingDetails}>
        <h3>Shipping Details:</h3>
        <p>Weight: {product.shipping.weight}</p>
        <p>Dimensions: {product.shipping.dimensions}</p>
        <p>Origin: {product.shipping.origin}</p>
        <p>Destination: {product.shipping.destination}</p>
        <p>Carrier: {product.shipping.carrier}</p>
        <p>Tracking Number: {product.shipping.trackingNumber}</p>
      </div>
      <div className={styles.quantityLabel}>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className={styles.quantityInput}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <Delivery>
          <p> will send : {formattedDate}</p>
        </Delivery>
      </div>

      <button className={styles.addToCartButton} onClick={handleAddToBasket}>
        Add to cart
      </button>
      <div className={styles.additionalInfo}>
        <p>Ships from and sold by {product.Manufacturer}</p>
        <p>
          Eligible for Return, Refund or Replacement within 30 days of receipt
        </p>
        <p>Secure transaction</p>
      </div>
    </div>
  );
};

export default ShippingCard;
