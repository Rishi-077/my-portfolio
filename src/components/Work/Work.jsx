import styles from "./Work.module.css";
import { data } from "./data";

function Work() {
  return (
    <>
      <section className={`container ${styles.work_container}`}>
        <div className="row">
          <h1 className={`${styles.title}`}>My Works</h1>
          {data.map((d, i) => (
            <div className="col-sm-6 col-12 py-3" key={i}>
              <div className={`${styles.card}`}>
                <img src={d.img} alt="img" />
                {d.direction.map((el) => (
                  <div key={el} className={`${styles.inner_card}`}>
                    <h6>{el}</h6>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="row g-4">
          <div className="col-6 px-5 py-3">
            <div className={`card ${styles.card}`}>
              <div className={`${styles.gallery_parent_1} card-body p-0 m-0`}>
                <div className={styles.direction_aware_hover__left}></div>
                <div className={styles.direction_aware_hover__right}></div>
                <div className={styles.direction_aware_hover__top}></div>
                <div className={styles.direction_aware_hover__bottom}></div>
                <div className={`${styles.gallery_1}`}>
                  <h6>Yes</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 px-5 py-3">
            <div className={`card ${styles.card}`}>
              <div className={`${styles.gallery_parent_2} card-body p-0 m-0`}>
                <div className={styles.direction_aware_hover__left}></div>
                <div className={styles.direction_aware_hover__right}></div>
                <div className={styles.direction_aware_hover__top}></div>
                <div className={styles.direction_aware_hover__bottom}></div>
                <div className={`${styles.gallery_1}`}>
                  <h6>Yes</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 px-5 py-3">
            <div className={`card ${styles.card}`}>
              <div className={`${styles.gallery_parent_3} card-body p-0 m-0`}>
                <div className={styles.direction_aware_hover__left}></div>
                <div className={styles.direction_aware_hover__right}></div>
                <div className={styles.direction_aware_hover__top}></div>
                <div className={styles.direction_aware_hover__bottom}></div>
                <div className={`${styles.gallery_1}`}>
                  <h6>Yes</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6  px-5 py-3">
            <div className={`card ${styles.card}`}>
              <div className={`${styles.gallery_parent_4} card-body p-0 m-0`}>
                <div className={styles.direction_aware_hover__left}></div>
                <div className={styles.direction_aware_hover__right}></div>
                <div className={styles.direction_aware_hover__top}></div>
                <div className={styles.direction_aware_hover__bottom}></div>
                <div className={`${styles.gallery_1}`}>
                  <h6>Yes</h6>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Work;
