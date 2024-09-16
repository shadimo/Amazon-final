import { useState } from "react";
import styles from "./BurgerMenu.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBack } from "react-icons/io5";

const faceItems = [
  {
    title: "Face Products",
    items: [{ name: "Foundation" }, { name: "Concealer" }],
  },
];
const initialMenuItems = [
  {
    title: "Make up",
    items: [
      { name: "face", newItems: faceItems },
      { name: "eyes" },
      { name: "lips" },
    ],
  },
  {
    title: "Skincare",
    items: [
      { name: "Moisturizers" },
      { name: "Cleansers" },
      { name: "Mask" },
      { name: "Sunscreen" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Collections" },
      { name: "Brushes" },
      { name: "Hair Styling Tools" },
      { name: "Accessories" },
    ],
  },
  {
    title: "Help & Setting",
    items: [
      { name: "Your Account" },
      { name: "United States" },
      { name: "Sign in" },
    ],
  },
];

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([initialMenuItems]);
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeButton = () => {
    setIsOpen(false);
  };

  const handleItemClick = (newItems) => {
    if (newItems && newItems.length > 0) {
      setMenuItems([...menuItems, newItems]);
      setCurrentMenuIndex(currentMenuIndex + 1);
    }
  };

  const handleBackClick = () => {
    if (currentMenuIndex > 0) {
      setCurrentMenuIndex(currentMenuIndex - 1);
      setMenuItems(menuItems.slice(0, -1));
    }
  };

  return (
    <>
      <button className={styles.burgerIcon} onClick={toggleMenu}>
        <RxHamburgerMenu />
      </button>
      {isOpen && (
        <>
          <div className={styles.overlay}>
            <div className={styles.menu}>
              <header className={styles.header}>
                <FaCircleUser />
                <h3>hello, sign in</h3>
                <button onClick={closeButton}> X </button>
              </header>
              <div>
                {menuItems[currentMenuIndex].map((section, index) => (
                  <ul key={index}>
                    {currentMenuIndex > 0 && (
                      <li className={styles.nextIcon} onClick={handleBackClick}>
                        <IoChevronBack />
                      </li>
                    )}

                    <h2>{section.title}</h2>
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleItemClick(item.newItems)}
                      >
                        {item.name}
                        <GrFormNext className={styles.nextIcon} />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BurgerMenu;
