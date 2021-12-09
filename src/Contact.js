import React from "react";
import "./Contact.css";
import emailjs from "emailjs"
import {send} from "emailjs-com"


function Contact() {

  function sendMail(params) {
    var tempParams = {
      from_name:document.getElementById("fromName").value,
      to_name:document.getElementById("toName").value,
      message:document.getElementById("msg").value,
    };

    emailjs.send("service_zf8iycs", "template_0ftkh94", tempParams)
    .then(function(res){
      console.log("success", res.status);
    })
  }

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
                id="toName"
                className="contact name to_name"
                placeholder="Your name *"
                value={toSend.to_name}
                onChange={handleChange}
              />
              <input
                type="text"
                id="fromName"
                className="contact name from_name"
                placeholder="Enter From Name *"
                value={toSend.from_name}
                onChange={handleChange}
              />
              <input
                type="text"
                id="msg"
                className="contact email reply_to"
                placeholder="Your Email *"
                value={toSend.reply_to}
                onChange={handleChange}
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
                value={toSend.message}
                onChange={handleChange}
              ></textarea>
              <button
                className="btn contact pointer"
                type="submit"
                onClick={send}
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
