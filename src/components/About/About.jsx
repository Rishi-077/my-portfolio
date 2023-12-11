import styles from "./About.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

function About() {
  return (
    <>
      <section className={`${styles.about_container_div}`}>
        <div className={`${styles.about_gray_bg}`}></div>
        <div className={`container ${styles.about_container}`}>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className={`${styles.about_content_div}`}>
                <h2>About Me</h2>
                <p className="py-4">
                  In the mean time shall soon find out the cause of this: What
                  was the epicurus towards their children; each of these can
                  have a chain of not to have been taken in the broad plain in
                  what is the reason why
                </p>
                <h6>
                  &quot;What was the epicurus towards their children; each of
                  these can have a chain.
                </h6>
              </div>
            </div>

            <div className="col-md-6 mt-md-0 mt-5 col-12 d-flex align-items-center">
              <div className={`${styles.about_range_div} w-100`}>
                <div>
                  <div
                    className={`${styles.about_skill_bar} d-flex justify-content-between`}
                  >
                    <h6>ReactJs</h6>
                    <p>90%</p>
                  </div>
                  <div className={`${styles.skill_bar}`}>
                    <div className={`${styles.skill_react}`}></div>
                  </div>
                </div>

                <div className="my-4">
                  <div
                    className={`${styles.about_skill_bar} d-flex justify-content-between`}
                  >
                    <h6>Angular</h6>
                    <p>50%</p>
                  </div>
                  <div className={`${styles.skill_bar}`}>
                    <div className={`${styles.skill_angular}`}></div>
                  </div>
                </div>

                <div>
                  <div
                    className={`${styles.about_skill_bar} d-flex justify-content-between`}
                  >
                    <h6>Javascript</h6>
                    <p>70%</p>
                  </div>
                  <div className={`${styles.skill_bar}`}>
                    <div className={`${styles.skill_javascript}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className={`card ${styles.swiper_card}`}>
                    <div
                      className={`card-body ${styles.swiper_card_body}`}
                    >
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={``} alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
