import { useState } from "react";
import styles from "./Login.module.css";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accountMenu}>
      <button type="button" onClick={toggleMenu} className={styles.menuToggle}>
        <span>Hello, sign in</span>
        <p>Account & Lists</p>
      </button>
      {isOpen && (
        <div className={styles.menuContent}>
          <div className={styles.signinButton}>
            <button>Sign in </button>
            <p>
              new customer? <a href="#">Sing up</a>
            </p>
          </div>
          <div className={styles.Content}>
            <div className={styles.section}>
              <h3>Your Lists</h3>
              <ul>
                <li>
                  <a href="#">Create a List</a>
                </li>
                <li>
                  <a href="#">Find a List or Registry</a>
                </li>
              </ul>
            </div>
            <div className={styles.section}>
              <h3>Your Account</h3>
              <ul>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Recommendations</a>
                </li>
                <li>
                  <a href="#">Watchlist</a>
                </li>
                <li>
                  <a href="#">Video</a>
                </li>
                <li>
                  <a href="#">Purchases & Rentals</a>
                </li>
                <li>
                  <a href="#">Kindle Unlimited</a>
                </li>
                <li>
                  <a href="#">Subscribe & Save Items</a>
                </li>
                <li>
                  <a href="#">Memberships & Subscription</a>
                </li>
                <li>
                  <a href="#">Music Library</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
