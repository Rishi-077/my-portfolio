import images from "../../constants";
import styles from "./Home.module.css";
import { IoMailOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <section>
        <div className={"row mx-0 " + styles.home_parent_div} id="home">
          <div className="col-md-5 col-12 d-flex align-items-center justify-content-md-end justify-content-start">
            <div className={`${styles.home_img_div} me-lg-5 me-0`}>
              <img src={images.profile} alt="img" />
            </div>
          </div>
          <div className="col-md-7 col-12  d-flex align-items-center justify-content-start mt-md-0 mt-4">
            <div className={`${styles.home_content_div} ms-lg-0 ms-md-5 ms-0`}>
              <h1 className={``}>
                My name is Rishi.
                <br />
                Front-end Developer
              </h1>
              <h6 className="">Front-end Developer at Cloudinlabs</h6>
            </div>
          </div>
        </div>

        <div className={"container " + styles.home_detail_parent}>
          <div className="row mx-0">
            <div className="col-lg-4 col-12 d-flex justicy-content-center">
              <div className={`${styles.home_details}`}>
                <h6>Development</h6>
                <h3>Web (ReactJs and Angular)</h3>
              </div>
            </div>
            <div className="col-lg-4 col-12 mt-lg-0 mt-sm-5 mt-3 d-flex flex-sm-row flex-column justicy-content-lg-center justify-content-between">
              <div className={`${styles.home_details} text-start text-lg-end`}>
                <h6>Phone</h6>
                <h3>
                  <a
                    href="tel:rishikesan070@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    +91 93610 87223
                  </a>
                </h3>
              </div>
              <div
                className={`${styles.home_details} mt-sm-0 mt-3 d-flex d-lg-none`}
              >
                <div className="me-3 text-start text-lg-end">
                  <h6 className={`${styles.email_h6}`}>Drop your Message</h6>
                  <h3 className={`${styles.email_h3}`}>
                    <a href="rishikesan070@gmail.com">
                      rishikesan070@gmail.com
                    </a>
                  </h3>
                </div>

                <div className="d-flex align-items-end">
                  <div className={`${styles.icon_div}`}>
                    <IoMailOutline />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 d-lg-flex d-none justicy-content-center">
              <div className={`${styles.home_details} d-flex`}>
                <div className="me-3  text-end">
                  <h6 className={`${styles.email_h6}`}>Drop your Message</h6>
                  <h3 className={`${styles.email_h3}`}>
                    <a
                      href="mailto:rishikesan070@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      rishikesan070@gmail.com
                    </a>
                  </h3>
                </div>

                <div className="d-flex align-items-end">
                  <div className={`${styles.icon_div}`}>
                    <IoMailOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
