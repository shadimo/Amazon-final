import styles from "./ProductCard.module.css";
import { CiStar } from "react-icons/ci";

const ProductCard = ({ product }) => {
  const handleSeeMoreClick = (event, id) => {
    // Redirect to details page with id as a parameter
    window.location.href = `/product/${id}`;
  };
  return (
    <div className={styles.card}>
      <img
        src={product.imageURL}
        alt={product.name}
        className={styles.productImage}
      />
      <h2 className={styles.productName}>{product.name}</h2>
      <div className={styles.priceSection}>
        <span className={styles.discountedPrice}> $ {product.price}</span>
        <span className={styles.originalPrice}>$ {product.oldPrice}</span>
      </div>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.reviews}>
        <i className={`icon ${styles.reviewIcon}`}></i>{" "}
        <CiStar style={{ color: "gold", fontSize: "30px" }} />
        {product.rating}
      </div>
      <a
        href="#"
        className={styles.moreLink}
        onClick={(event) => handleSeeMoreClick(event, product.id)}
      >
        see more ...
      </a>
    </div>
  );
};

export default ProductCard;
