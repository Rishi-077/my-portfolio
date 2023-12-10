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
    </div>
  );
}

export default Landing;
