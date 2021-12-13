import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zf8iycs",
        "template_0ftkh94",
        form.current,
        "user_6B3rTXrOybi6CwNEw5qo9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="contact component__space" id="Contact">
        <div className="row">
          <div className="col__2">
            <div className="contact__box">
              <div className="contact__meta">
                <h1 className="hire__text">Contact Me.</h1>
                <p className="hire__text white">
                  I am available for freelance work. Connect with me via phone:
                </p>
                <p className="hire__text white">
                  <strong>+32/471 655 428</strong> or email{" "}
                  <strong>saka.pascale@gmail.com</strong>
                </p>
              </div>
              <div className="input__box">
                <input
                  type="text"
                  id="name"
                  className="contact name user_name"
                  required
                  placeholder="Your Name **"
                />
                <input
                  type="text"
                  id="fromName"
                  className="contact name company_name"
                  placeholder="Company Name"
                />
                <input
                  type="text"
                  id="phone"
                  required
                  className="contact name user_phone"
                  placeholder="Phone *"
                />
                <input
                  type="text"
                  id="email"
                  className="contact name user_email"
                  required
                  placeholder="Your Email **"
                />

                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Write Your message"
                ></textarea>
                <input
                  className="btn contact pointer"
                  type="submit"
                  value="Send Email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
