import images from "../../constants/images";
import styles from "./Work.module.css";

function Work() {
  return (
    <>
      <section className={`container ${styles.work_container}`}>
        <div className="row">
          <div className="col-6">
            <div className={`card ${styles.card}`}>
              <div className={`card-body ${styles.card_body} p-0 m-0`}>
                <div className={`${styles.gallery_parent}`}>
                  <div className={`${styles.gallery_1}`}>
                    <img src={images.g_1} alt="img" />
                  </div>
                  <div className={styles.direction_aware_hover__left}></div>
                  <div className={styles.direction_aware_hover__right}></div>
                  <div className={styles.direction_aware_hover__top}></div>
                  <div className={styles.direction_aware_hover__bottom}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
          <div className="col-6"></div>
          <div className="col-6"></div>
        </div>
      </section>
    </>
  );
}

export default Work;
