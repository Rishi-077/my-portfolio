import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Home from "../../components/Home/Home";
import Work from "../../components/Work/Work";
import Navbar from "../../layouts/Navbar/Navbar";
import styles from "./Landing.module.css";

function Landing() {
  return (
    <div>
      <div className={`container-fluid px-0 ${styles.home_container}`}>
        <Navbar />
        <Home />
      </div>
      <Work />
      <About />
      <Footer />
    </div>
  );
}

export default Landing;
