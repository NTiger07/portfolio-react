import React, { useRef } from "react";
import LoadingSpinner from "./LoadingSpinner";
import emailjs from "@emailjs/browser";
import send from "../svgs/send.svg";
import "./Contact.css";

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
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
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
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
        {isLoading && (
          <div className="loading_container">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
};
export default Contact;
