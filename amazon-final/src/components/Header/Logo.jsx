import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";
import LogoImage from "../../../assets/image.avif";

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.logo} onClick={handleLogoClick}>
      <img src={LogoImage} alt="LOGO" className={styles.logoImage} />
    </div>
  );
};

export default Logo;
