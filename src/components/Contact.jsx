import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t2crjsn",
        "template_osg8uvs",
        form.current,
        "FfdpyGOGgm8_YkTz7"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact_section">
      <h1>CONTACT ME</h1>
      <div className="form_container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            autoComplete="off"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="text"
            name="user_subject"
            placeholder="Subject"
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Write Message"
            autoComplete="off"
          />
          <input type="submit" value="Send" id="submitBtn" />
        </form>
      </div>
    </div>
  );
}
