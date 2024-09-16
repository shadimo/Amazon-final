import Logo from "../Header/Logo";
import styles from "./BottomSection.module.css";
import global from "../../../assets/global.png";
const BottomSection = () => {
  return (
    <div className={styles.bottomSection}>
      <div className={styles.languageCurrency}>
        <Logo />
        <span>
          <img src={global} />
          English
        </span>
        <span>$ USD - U.S. Dollar</span>
        <span>United States</span>
      </div>
    </div>
  );
};

export default BottomSection;
