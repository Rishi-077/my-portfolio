import images from "../../constants";
import Navbar from "../../layouts/Navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={`container-fluid ${styles.home_container}`}>
        <Navbar />

        <div className="row">
          <div className="col-12"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
