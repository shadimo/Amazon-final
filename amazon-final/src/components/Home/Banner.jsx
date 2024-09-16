import { useState, useEffect } from "react";
import { useProductContext } from "../Home/ProductProvider";
import ProductCard from "./ProductCard";
import styles from "./Banner.module.css";
import bg1 from "../../../assets/bg1.jpg";
import bg2 from "../../../assets/bg2.jpg";
import bg3 from "../../../assets/bg3.jpg";

const Banner = () => {
  const { products } = useProductContext();
  const [index, setIndex] = useState(0);
  const bgs = [bg1, bg2, bg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % bgs.length);
    }, 60000);

    return () => clearInterval(interval);
  }, [bgs.length]);

  const goNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const goBack = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${bgs[index % bgs.length]})` }}
    >
      <button onClick={goBack} className={styles.button}>
        {"<"}
      </button>
      <div className={styles.productContainer}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} className={styles.card} />
        ))}
      </div>
      <button onClick={goNext} className={styles.button}>
        {">"}
      </button>
    </div>
  );
};

export default Banner;
