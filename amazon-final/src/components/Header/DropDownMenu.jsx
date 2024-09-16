import { useState } from "react";
import styles from "./DropDownMenu.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={styles.dropdownToggle}
      >
        {selectedOption}
        <IoMdArrowDropdown />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li
            onClick={() => handleOptionClick("All")}
            className={styles.dropdownMenuItem}
          >
            All
          </li>
          <li
            onClick={() => handleOptionClick("mobiles")}
            className={styles.dropdownMenuItem}
          >
            mobiles
          </li>
          <li
            onClick={() => handleOptionClick("accessory")}
            className={styles.dropdownMenuItem}
          >
            accessory
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
