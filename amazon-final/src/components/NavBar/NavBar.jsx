import styles from "./NavBar.module.css";
import BurgerMenu from "./BurgerMenu";
const NavBar = () => {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <BurgerMenu />
          All
        </li>
        <li>
          <a href="#">Todays Deals</a>
        </li>
        <li>
          <a href="#">Customer Service</a>
        </li>
        <li>
          <a href="#">Registry</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
