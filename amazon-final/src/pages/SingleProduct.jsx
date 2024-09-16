import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ShippingCard from "../components/ShippingCard";
import styles from "./SingleProduct.module.css";
import { CiStar } from "react-icons/ci";
import productsData from "../../db.json";

const SingleProduct = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (id && productsData.products.length > 0) {
      const product = productsData.products.find(
        (product) => product.id === parseInt(id)
      );
      setSelectedProduct(product);
    }
  }, [id]);

  return (
    <div>
      <Header />
      <NavBar />

      <div style={{ display: "flex" }}>
        {selectedProduct ? (
          <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
            <div className={styles.productDetails}>
              <div>
                <h2 className={styles.productTitle}>{selectedProduct.name}</h2>
                <img
                  className={styles.productImage}
                  src={`../${selectedProduct.imageURL}`}
                  alt={selectedProduct.name}
                />
                <p className={styles.productDescription}>
                  {selectedProduct.description}
                </p>
                <p className={styles.productPrice}>
                  $ {selectedProduct.price}
                  <span className={styles.productOldPrice}>
                    (was $ {selectedProduct.oldPrice})
                  </span>
                </p>
                <p className={styles.productRating}>
                  Rating:
                  <CiStar
                    style={{
                      color: "gold",
                      fontSize: "25px",
                    }}
                  />
                  {selectedProduct.rating}
                </p>
              </div>
              <div>
                <p>Ingredients: {selectedProduct.Ingredients}</p>
                <p>Made in: {selectedProduct.Origin}</p>
                <p>Manufacturered : {selectedProduct.Manufacturer}</p>
                <p>Usage : {selectedProduct.Usage}</p>
                <h3>Shipping Details:</h3>
                <p>Weight: {selectedProduct.shipping.weight}</p>
                <p>Dimensions: {selectedProduct.shipping.dimensions}</p>
                <p>Origin: {selectedProduct.shipping.origin}</p>
                <p>Destination: {selectedProduct.shipping.destination}</p>
                <p>Carrier: {selectedProduct.shipping.carrier}</p>
                <p>
                  Tracking Number: {selectedProduct.shipping.trackingNumber}
                </p>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <ShippingCard
                product={selectedProduct}
                selectedProduct={selectedProduct}
              />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SingleProduct;
