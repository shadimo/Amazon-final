import { useState, useEffect } from "react";
import axios from "axios";
import { SlLocationPin } from "react-icons/sl";
import styles from "./Delivery.module.css";

function Delivery({ children }) {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountry(response.data.country_name);
      } catch (error) {
        console.error("Error fetching the country data:", error);
      }
    };

    fetchCountry();
  }, []);
  return (
    <div className={styles.delivery}>
      <SlLocationPin className={styles.icon} />
      <div className={styles.text}>
        <span>Deliver to</span>
        <span>{country ? <p>{country}</p> : <p>Loading...</p>}</span>
        {children}
      </div>
    </div>
  );
}

export default Delivery;
