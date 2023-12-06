import React, { useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  console.log(nav);

  // const df = useRef();
  // console.log(df.current.clientHeight);
  return (
    <>
      <nav>
        <div className={`container-fluid ${styles.nav_container}`}>
          <div className={`${styles.nav_div_parent}`}>
            <div className={`${styles.nav_brand}`}>
              <h5 className="">Rishi.</h5>
            </div>

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
            </div>
            <div
              style={{
                maxHeight: nav ? "200px" : 0,
                transition: "max-height 0.5s ease-in-out",
              }}
              className={`${styles.nav_route_active}  d-md-none d-block`}
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

            <div className={`${styles.nav_route}  d-md-block d-none`}>
              <ul className={`${styles.nav_ul}`}>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Work</Link>
                </li>
                <li>
                  <Link>Service</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>

            <div className={`${styles.nav_btn_div} d-md-block d-none`}>
              <button>Let&apos;s Talk</button>
            </div>
          </div>

          {/* <div className={`${styles.}`}></div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
