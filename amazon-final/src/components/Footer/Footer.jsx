import BackToTopButton from "./BackToTopButton";
import BottomSection from "./BottomSection";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div>
        <BackToTopButton />
      </div>
      <footer className={styles.footer}>
        <div className={styles.column}>
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Let Us Help You</h3>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </ul>
        </div>
      </footer>
      <div>
        <BottomSection />
      </div>
    </>
  );
};

export default Footer;
