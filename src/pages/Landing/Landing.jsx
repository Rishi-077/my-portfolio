import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home";
import Work from "../../components/Work/Work";
import Footer from "../../layouts/Footer/Footer";
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
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
