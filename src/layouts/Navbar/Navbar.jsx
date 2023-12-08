// import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

function Navbar() {
  // const [nav, setNav] = useState(false);

  return (
    <>
      <nav>
        <div className={`container-fluid px-0 ${styles.nav_container}`}>
          <div className={`${styles.nav_div_parent}`}>
            <div className={`${styles.nav_brand}`}>
              <h5 className="">Rishi.</h5>
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

        </div>
      </nav>
    </>
  );
}

export default Navbar;
