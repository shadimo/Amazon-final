import { createContext, useState, useContext, useEffect } from "react";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (product, quantity) => {
    console.log("Adding to basket:", product, "Quantity:", quantity);
    setBasket((prevBasket) => [...prevBasket, { ...product, quantity }]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
