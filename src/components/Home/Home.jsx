import images from "../../constants";
import Navbar from "../../layouts/Navbar/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <section className={`container-fluid ${styles.home_container}`}>
        <Navbar />

        <div className={"row " + styles.home_parent_div}>
          <div className="col-5 d-flex align-items-center justify-content-end">
            <div className={`${styles.home_img_div} me-5`}>
              <img src={images.profile} alt="img" />
            </div>
          </div>
          <div className="col-7 d-flex align-items-center justify-content-start">
            <div className={`${styles.home_content_div}`}>
              <h1 className={``}>
                My name is Rishi.
                <br />
                Front-end Developer
              </h1>
              <h6 className="">Front-end Developer at Cloudinlabs</h6>
            </div>
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
};

export default Home;
