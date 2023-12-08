import { Link } from "react-scroll";
import images from "../../constants";
import Navbar from "../../layouts/Navbar/Navbar";
import styles from "./Home.module.css";
import { IoMailOutline } from "react-icons/io5";
import { useState } from "react";

const Home = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <section className={`container-fluid ${styles.home_container}`}>
        <Navbar />

        <div className={`position-relative`}>
          <div className={`${styles.hamburger_menu}`}>
            <button
              className="d-flex align-items-center"
              onClick={() => setNav(!nav)}
            >
              <span className="uc px-1">Menu</span>{" "}
              <div>
                <div className={`${styles.bar}`}></div>
                <div className={`${styles.bar}`}></div>
                <div className={`${styles.bar}`}></div>
              </div>
            </button>

            <div
              style={{
                maxHeight: nav ? "200px" : 0,
                transition: "max-height 0.5s ease-in-out",
              }}
              className={`${styles.nav_route_active} d-md-none d-block`}
            >
              <ul className={`${styles.nav_ul}`}>
                <li onClick={() => setNav(!nav)}>
                  <Link>Home</Link>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <Link>Work</Link>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <Link>Service</Link>
                </li>
                <li onClick={() => setNav(!nav)}>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={"row " + styles.home_parent_div}>
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
          <div className="row">
            <div className="col-lg-4 col-12 d-flex justicy-content-center">
              <div className={`${styles.home_details}`}>
                <h6>Development</h6>
                <h3>Web (ReactJs and Angular)</h3>
              </div>
            </div>
            <div className="col-lg-4 col-12 mt-lg-0 mt-sm-5 mt-3 d-flex flex-sm-row flex-column justicy-content-lg-center justify-content-between">
              <div className={`${styles.home_details} text-start text-lg-end`}>
                <h6>Phone</h6>
                <h3>+91 93610 87223</h3>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
