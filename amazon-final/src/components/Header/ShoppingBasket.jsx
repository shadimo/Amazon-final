import { useNavigate } from "react-router-dom";
import basketImage from "../../../assets/basket.avif";
import styles from "./ShoppingBasket.module.css";
import { useBasket } from "../BasketContext";

const ShoppingBasket = () => {
  const navigate = useNavigate();
  const { basket } = useBasket();

  const handleLogoClick = () => {
    navigate("/basket");
  };
  return (
    <div className={styles.carts}>
      <a href="#" className={styles.cartIcon} onClick={handleLogoClick}>
        <span className={styles.badge}>{basket.quantity}</span>
        <img src={basketImage} alt="basket" />
        <p>Cart</p>
      </a>
    </div>
  );
};

export default ShoppingBasket;
