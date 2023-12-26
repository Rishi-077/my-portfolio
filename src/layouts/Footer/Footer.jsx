import styles from "./Footer.module.css";
import { FaGithub, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <>
      <section className={`container-fluid ${styles.footer_container}`}>
        <div className="container">
          <div className="row  py-5">
            <div className="col-md-6">
              <div className={`${styles.footer_content_div}`}>
                <h4>Rishi.</h4>
                <p className="py-3">
                  “Digital design is like painting, except the paint never
                  dries.”
                </p>
                <div
                  className={`${styles.social_icon_parent} d-flex align-items-start`}
                >
                  <div className={`${styles.social_icon_div} me-2`}>
                    <a
                      href="https://www.linkedin.com/in/rishi-kesan-2b23ba228/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <FaLinkedinIn className={`${styles.social_icon}`} />
                    </a>
                  </div>
                  <div className={`${styles.social_icon_div} me-2`}>
                    <a
                      href="https://github.com/Rishi-077"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <FaGithub className={`${styles.social_icon}`} />
                    </a>
                  </div>
                  <div className={`${styles.social_icon_div} me-2`}>
                    <a
                      href="https://rishi-portfolio-chi.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGlobe className={`${styles.social_icon}`} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-5 d-flex align-items-center justify-content-center">
              <div>
                <a
                  href="https://drive.google.com/file/d/1ujaVRApBKOsH_icXyKRerEsa24y6jOBy/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.btn_cv}`}
                >
                  Download CV
                </a>
                <button className={`${styles.btn_talk}`}>
                  <Link
                    activeClass="active"
                    style={{ cursor: "pointer" }}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {" "}
                    Let&apos;s Talk
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-6 order-md-1 order-2">
              <p
                className={`${styles.copyright_p} text-md-start text-center mb-0`}
              >
                Copyright ©2023 All rights reserved | made with ❤️ by{" "}
                <span>Rishi.</span>
              </p>
            </div>
            <div className="col-md-6 order-md-2 order-1 mb-md-0 mb-4">
              <ul className={`${styles.footer_nav_ul}`}>
                <li>
                  <Link
                    activeClass="active"
                    style={{ cursor: "pointer" }}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    style={{ cursor: "pointer" }}
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    style={{ cursor: "pointer" }}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    style={{ cursor: "pointer" }}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
