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
    setBasket((prevBasket) => [...prevBasket, { ...product, quantity }]);
  };

  const updateQuantity = (index, quantity) => {
    setBasket((prevBasket) => {
      const newBasket = [...prevBasket];
      newBasket[index].quantity = quantity;
      return newBasket;
    });
  };

  const removeItem = (index) => {
    setBasket((prevBasket) => prevBasket.filter((_, i) => i !== index));
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, updateQuantity, removeItem }}
    >
      {children}
    </BasketContext.Provider>
  );
};
