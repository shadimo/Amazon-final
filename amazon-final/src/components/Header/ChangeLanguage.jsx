import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import USflag from "../../../assets/flag.avif";
import styles from "./ChangeLanguage.module.css";

const ChangeLanguage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.accountMenu}>
      <button type="button" onClick={toggleMenu} className={styles.menuToggle}>
        <img src={USflag} alt="US flag" />
        <h5>EN</h5>
        <IoMdArrowDropdown />
      </button>
      {showDropdown && (
        <div className={styles.menuContent}>
          <ul className={styles.section}>
            <div className={styles.text}>
              <p>change language</p>
              <a href="#">learn more</a>
            </div>
            <li>English - EN</li>
            <li>español - ES</li>
            <li>العربية - AR</li>
            <li>Deutsch - DE</li>
            <li>עברית - HE</li>
            <li>한국어 - KO</li>
            <li>português - PT</li>
            <li>中文(简体) - ZΗ</li>
            <div className={styles.text}>
              <p>change currency</p>
              <a href="#">learn more</a>
            </div>
            <div className={styles.text}>
              <p> $ - USD - US Dollar</p>
              <a href="#">change</a>
            </div>
            <div className={styles.text}>
              <img src={USflag} alt="US flag" />
              <p>you are shopping on Amazon.com</p>
            </div>
            <a href="#">Change country/region.</a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChangeLanguage;
