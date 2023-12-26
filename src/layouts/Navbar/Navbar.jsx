import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 300) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <nav>
        <div
          className={`container-fluid px-3 ${
            color ? styles.nav_container_color : styles.nav_container
          }`}
        >
          <div className={`${styles.nav_div_parent}`}>
            <div className={`${styles.nav_brand}`}>
              <h5 className="mb-0">
                {" "}
                <Link
                  activeClass="active"
                  style={{ cursor: "pointer" }}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setNav(!nav)}
                >
                  Rishi.
                </Link>
              </h5>
            </div>

            <div className={`${styles.nav_route}  d-md-block d-none`}>
              <ul className={`${styles.nav_ul}`}>
                <li>
                  <Link
                    activeClass="active"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setNav(!nav)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setNav(!nav)}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setNav(!nav)}
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setNav(!nav)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className={`${styles.nav_btn_div} d-md-block d-none`}>
              <Link
                activeClass="active"
                style={{ cursor: "pointer" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setNav(!nav)}
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

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
                  <li>
                    <Link
                      onClick={() => setNav(!nav)}
                      activeClass="active"
                      style={{ cursor: "pointer", textDecoration: "none" }}
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setNav(!nav)}
                      activeClass="active"
                      style={{ cursor: "pointer", textDecoration: "none" }}
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <span>Work</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setNav(!nav)}
                      activeClass="active"
                      style={{ cursor: "pointer", textDecoration: "none" }}
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <span>Service</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setNav(!nav)}
                      activeClass="active"
                      style={{ cursor: "pointer", textDecoration: "none" }}
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
