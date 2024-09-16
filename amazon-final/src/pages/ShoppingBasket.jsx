import { useBasket } from "../components/BasketContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import styles from "../pages/ShoppingBasket.module.css";
import { useState, useEffect } from "react";

const ShoppingBasket = () => {
  const { basket, updateQuantity, removeItem } = useBasket();
  const [quantities, setQuantities] = useState(
    basket.map((item) => item.quantity)
  );
  const [costs, setCosts] = useState(
    basket.map((item) => item.quantity * item.price)
  );
  const [isQuantityChanged, setIsQuantityChanged] = useState(false);

  useEffect(() => {
    const newCosts = basket.map(
      (item, index) => quantities[index] * item.price
    );
    setCosts(newCosts);
  }, [quantities, basket]);

  const handleQuantityChange = (index, newQuantity) => {
    const newQuantities = [...quantities];
    newQuantities[index] = newQuantity;
    setQuantities(newQuantities);
    setIsQuantityChanged(newQuantities[index] !== basket[index].quantity);
    updateQuantity(index, newQuantity);
  };

  const handleDelete = (index) => {
    removeItem(index);
    setQuantities(
      basket.filter((_, i) => i !== index).map((item) => item.quantity)
    );
    setCosts(
      basket
        .filter((_, i) => i !== index)
        .map((item) => item.quantity * item.price)
    );
  };
  const totalQuantity = quantities.reduce((acc, quantity) => acc + quantity, 0);
  const totalPrice = costs.reduce((acc, cost) => acc + cost, 0);

  return (
    <div>
      <Header />
      <NavBar />
      <h2>Shopping Basket</h2>
      <div className={styles.container}>
        {basket.length === 0 ? (
          <p>Your basket is empty</p>
        ) : (
          <ul>
            {basket.map((item, index) => (
              <li key={index} className={styles.carts}>
                <img src={item.imageURL} alt={item.description} />
                <div>
                  <span>{item.description}</span>
                  <span style={{ color: "green" }}>In Stock</span>
                  <label>
                    <input type="checkbox" />
                    This will be a gift
                    <a href="#"> learn more</a>
                  </label>
                  <span>{item.Manufacturer}</span>
                  <span>{item.Origin}</span>
                  <span> ${item.price} </span>

                  <div>
                    <label>
                      Quantity:
                      <input
                        type="number"
                        value={quantities[index]}
                        onChange={(e) =>
                          handleQuantityChange(
                            index,
                            parseInt(e.target.value, 10)
                          )
                        }
                        min="0"
                      />
                    </label>
                    <span>Cost: ${costs[index]}</span>
                    {isQuantityChanged ? (
                      <button onClick={() => alert("Updated")}>Update</button>
                    ) : (
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    )}
                    <button>Save for later</button>
                    <button>See more like this</button>
                    <button>Share</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className={styles.summary}>
          <p>Total Quantity: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <label>
            <input type="checkbox" />
            This will be a gift
            <a href="#"> learn more</a>
          </label>
          <button>Proceed to Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingBasket;
