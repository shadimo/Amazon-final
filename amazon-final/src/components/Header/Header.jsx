import ChangeLanguage from "./ChangeLanguage";
import Delivery from "./Delivery";
import Logo from "./Logo";
import Search from "./Search";
import Login from "./Login";
import ShoppingBasket from "./ShoppingBasket";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Delivery />
      <Search />
      <ChangeLanguage />
      <Login />
      <div className={styles.retunAndOrder}>
        <span>Returns</span>
        <p>& Orders</p>
      </div>
      <ShoppingBasket />
    </div>
  );
};
export default Header;
