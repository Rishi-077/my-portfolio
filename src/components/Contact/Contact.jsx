import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import { CiHome, CiMail, CiMobile3 } from "react-icons/ci";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
      company: "",
      phone: "",
    },
  });

  const [data, setData] = useState({});

  const onInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mwvnr1t",
        "template_98oy9ja",
        form.current,
        "user_99q7DVqiRkHk9AlrAmpyc"
      )
      .then(
        (result) => {
          reset();
          Swal.fire(
            "Good job!",
            "Message Send Successfully :)",
            "success",
            "Close"
          );
        },
        (error) => {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong message could not be sent :) ",
            icon: "error",
            button: "ok!",
          });
        }
      );
  };

  return (
    <>
      <section className={`container ${styles.contact_container}`} id="contact" >
        <div className="row">
          <h1 className={`${styles.title}`}>Get in touch</h1>

          <div className="col-md-8 col-12 ">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12">
                  <div className={`${styles.input_div} py-3`}>
                    <textarea
                      type="text"
                      className={`form-control shadow-none`}
                      name="message"
                      placeholder="Enter Message"
                      id="message"
                      rows={5}
                      onChange={(e) => onInputChange(e)}
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    <span className="text-danger fs-10 fw-500">
                      {errors.message && errors.message.message}
                    </span>
                  </div>
                </div>

                <div className="col-sm-6 col-12">
                  <div className={`${styles.input_div} py-3`}>
                    <input
                      type="text"
                      className={`form-control shadow-none`}
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      onChange={(e) => onInputChange(e)}
                      {...register("name", {
                        required: "Name is required",
                        maxLength: {
                          value: 55,
                          message: "Max length is 55",
                        },
                      })}
                    />
                    <span className="text-danger fs-10 fw-500">
                      {errors.name && errors.name.message}
                    </span>
                  </div>
                </div>

                <div className="col-sm-6 col-12">
                  <div className={`${styles.input_div} py-3`}>
                    <input
                      type="text"
                      className={`form-control shadow-none`}
                      name="email"
                      id="email"
                      placeholder="Enter email address"
                      onChange={(e) => onInputChange(e)}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                          message: "Email is Invalid",
                        },
                        maxLength: {
                          value: 55,
                          message: "Max length is 55",
                        },
                      })}
                    />
                    <span className="text-danger fs-10 fw-500">
                      {errors.email && errors.email.message}
                    </span>
                  </div>
                </div>

                <div className="col-12 ">
                  <div className={`${styles.input_div} py-3`}>
                    <input
                      type="text"
                      className={`form-control shadow-none`}
                      name="subject"
                      id="subject"
                      placeholder="Enter Subject"
                      onChange={(e) => onInputChange(e)}
                      {...register("subject", {
                        required: "subject is required",
                        maxLength: {
                          value: 55,
                          message: "Max length is 55",
                        },
                      })}
                    />
                    <span className="text-danger fs-10 fw-500">
                      {errors.subject && errors.subject.message}
                    </span>
                  </div>
                </div>

                <div className="col-12 mt-4">
                  <button className={`${styles.contact_btn}`}>SEND</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-4 col-12 d-flex align-items-start justify-content-md-center justify-content-start mt-md-0 mt-5">
            <div className={`d-flex flex-column`}>
              <div className={`${styles.address_content_div}`}>
                <div className="me-3">
                  <CiHome className={`${styles.contact_icon}`} />
                </div>
                <div>
                  <h6>Sivagangai, Tamilnadu</h6>
                  <p>Muthunagar, AR Quarters</p>
                </div>
              </div>

              <div className={`${styles.address_content_div}`}>
                <div className="me-3">
                  <CiMobile3 className={`${styles.contact_icon}`} />
                </div>
                <div>
                  <h6>+91 9361087223</h6>
                  <p>Call at anytime!</p>
                </div>
              </div>

              <div className={`${styles.address_content_div}`}>
                <div className="me-3">
                  <CiMail className={`${styles.contact_icon}`} />
                </div>
                <div>
                  <h6>rishikesan070@gmail.com</h6>
                  <p>Send us your query</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
