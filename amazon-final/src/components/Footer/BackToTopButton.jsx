import { useState, useEffect } from "react";
import styles from "./BackToTopButton.module.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className={styles.backToTopContainer}>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.backToTopButton}>
          Back to Top
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
