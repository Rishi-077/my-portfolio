import styles from "./About.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import images from "../../constants/images";

function About() {
  const df = useRef();
  const [count, setCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  const changeScreen = useCallback(() => {
    // setWidth(window.screen.width);

    if (window.screen.width < 400) {
      setCount(1);
    } else if (window.screen.width >= 400 && window.screen.width < 576) {
      setCount(3);
    } else {
      setCount(6);
    }
    console.log(count);
  }, [count]);

  useEffect(() => {
    changeScreen();
    observer.observe(df.current);
    return () => {
      observer.disconnect();
    };
  }, [df, observer, changeScreen]);

  window.addEventListener("resize", changeScreen);

  return (
    <>
      <section className={`${styles.about_container_div}`} id="about">
        <div className={`${styles.about_gray_bg}`}></div>
        <div className={`container ${styles.about_container}`}>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className={`${styles.about_content_div}`}>
                <h2>About Me</h2>
                <p className="py-4">
                  I believe that I would make a valuable addition to your team
                  due to my passion for software development and my two years of
                  experience in front-end development. I have a proven track
                  record in{" "}
                  <span style={{ color: "var(--orange-color)" }}>ReactJS</span>{" "}
                  and{" "}
                  <span style={{ color: "var(--orange-color)" }}>Angular</span>{" "}
                  technologies.
                </p>
                <h6>
                  “Let us take you into a deeper experience, make a moment a
                  lasting conveyable memory. Let us help build your tribe.”
                </h6>
              </div>
            </div>

            <div
              className="col-md-6 mt-md-0 mt-5 col-12 d-flex align-items-center"
              ref={df}
            >
              <div className={`${styles.about_range_div} w-100`}>
                <div>
                  <div
                    className={`${styles.about_skill_bar} d-flex justify-content-between`}
                  >
                    <h6>ReactJs</h6>
                    <p>90%</p>
                  </div>
                  <div className={`${styles.skill_bar}`}>
                    <div
                      className={`${isIntersecting ? styles.skill_react : ""}`}
                    ></div>
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
                    <div
                      className={`${
                        isIntersecting ? styles.skill_angular : ""
                      }`}
                    ></div>
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
                    <div
                      className={`${
                        isIntersecting ? styles.skill_javascript : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 px-sm-0 px-5">
              <Swiper
                slidesPerView={count}
                spaceBetween={window.screen.width < 400 ? 10 : 30}
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
                  <div className={`card h-100 ${styles.swiper_card}`}>
                    <div className={`card-body ${styles.swiper_card_body}`}>
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={images.html} alt="img" />
                      </div>
                      <h6>HTML</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={`card h-100 ${styles.swiper_card}`}>
                    <div className={`card-body ${styles.swiper_card_body}`}>
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={images.css} alt="img" />
                      </div>
                      <h6>CSS</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={`card h-100 ${styles.swiper_card}`}>
                    <div className={`card-body ${styles.swiper_card_body}`}>
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={images.bootstrap} alt="img" />
                      </div>
                      <h6>Bootstrap</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={`card h-100 ${styles.swiper_card}`}>
                    <div className={`card-body ${styles.swiper_card_body}`}>
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={images.js} alt="img" />
                      </div>
                      <h6>Javascript</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={`card h-100 ${styles.swiper_card}`}>
                    <div className={`card-body ${styles.swiper_card_body}`}>
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={images.react} alt="img" />
                      </div>
                      <h6>ReactJs</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={`card h-100 ${styles.swiper_card}`}>
                    <div className={`card-body ${styles.swiper_card_body}`}>
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={images.redux} alt="img" />
                      </div>
                      <h6>Redux</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={`card h-100 ${styles.swiper_card}`}>
                    <div className={`card-body ${styles.swiper_card_body}`}>
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={images.angular} alt="img" />
                      </div>
                      <h6>Angular</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={`card h-100 ${styles.swiper_card}`}>
                    <div className={`card-body ${styles.swiper_card_body}`}>
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={images.ts} alt="img" />
                      </div>
                      <h6>Typescript</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={`card h-100 ${styles.swiper_card}`}>
                    <div className={`card-body ${styles.swiper_card_body}`}>
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={images.git} alt="img" />
                      </div>
                      <h6>Git</h6>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className={`card h-100 ${styles.swiper_card}`}>
                    <div className={`card-body ${styles.swiper_card_body}`}>
                      <div className={`${styles.swiper_img_div}`}>
                        <img src={images.github} alt="img" />
                      </div>
                      <h6>GitHub</h6>
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
