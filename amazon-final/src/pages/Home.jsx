import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import { ProductProvider } from "../components/Home/ProductProvider";

import Banner from "../components/Home/Banner";
const Home = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <ProductProvider>
        <Banner />
      </ProductProvider>
      <Footer />
    </div>
  );
};
export default Home;
