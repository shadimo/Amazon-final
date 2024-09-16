import { useBasket } from "../components/BasketContext";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const ShoppingBasket = () => {
  const { basket } = useBasket();
  console.log(basket);

  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <h2>Shopping Basket</h2>
        {basket.length === 0 ? (
          <p>Your basket is empty</p>
        ) : (
          <ul>
            {basket.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingBasket;
