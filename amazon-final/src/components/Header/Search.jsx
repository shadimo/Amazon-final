import { IoIosSearch } from "react-icons/io";
import styles from "./Search.module.css";
import Dropdown from "./DropDownMenu";
const Search = () => {
  return (
    <form className={styles.form}>
      <Dropdown />
      <input type="text" placeholder="Search Amazon" className={styles.input} />
      <button className={styles.button}>
        <IoIosSearch />
      </button>
    </form>
  );
};

export default Search;
