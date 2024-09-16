import { useState, useEffect } from "react";
import axios from "axios";
import { SlLocationPin } from "react-icons/sl";
import styles from "./Delivery.module.css";

function Delivery({ children }) {
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        setCountry(response.data.country_name);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.error("Too many requests. Please try again later.");
          setError("Too many requests. Please try again later.");
        } else {
          console.error("Error fetching the country data:", error);
          setError("Error fetching the country data.");
        }
      }
    };

    fetchCountry();
  }, []);

  return (
    <div className={styles.delivery}>
      <SlLocationPin className={styles.icon} />
      <div className={styles.text}>
        <span>Deliver to</span>
        <span>
          {country ? <p>{country}</p> : <p>{error || "Loading..."}</p>}
        </span>
        {children}
      </div>
    </div>
  );
}

export default Delivery;
