import React from "react";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".form-message");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (name && isEmail() && message) {
      const templateId = "template_0ftkh94";

      nameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      sendFeedback(templateId, {
        name,
        company,
        phone,
        email,
        message,
      });
  } else {
      formMess.innerHTML = "Please fill in the required fields correctly *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  const sendFeedback = (templateId, variables) => {
    let formMess = document.querySelector(".form-message");

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        formMess.innerHTML =
          "Message sent ! I will get back to you as soon as possible.";
        formMess.style.background = "#00c1ec";
        formMess.style.opacity = "1";

        document.getElementById("name").classList.remove("error");
        document.getElementById("email").classList.remove("error");
        document.getElementById("message").classList.remove("error");
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 5000);
      })
      .catch(
        (err) =>
          (formMess.innerHTML = "An error has occurred. Please try again.")
      );
  };

  return (
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
                required
                onChange={(e) => setName(e.target.value)}
                className="contact name"
                placeholder="Your name *"
                value={name}
              />
              <input
                type="text"
                id="fromName"
                className="contact name"
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter From Name *"
                value={company}
              />
               <input
          type="text"
          id="phone"
          className="contact phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          value={phone}
        />
                <input
                  type="text"
                  id="email"
                  className="contact email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email *"
                  value={email}
                />
              <textarea
                name="message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write Your message"
                value={message}
              ></textarea>
              <button
                className="btn contact pointer"
                type="submit"
                value="send"
                onClick={handleSubmit}
              >
                Send Email
              </button>
              <div className="form-message"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
